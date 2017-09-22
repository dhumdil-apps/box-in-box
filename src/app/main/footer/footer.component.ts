import { Component, AfterViewInit, Input }	from '@angular/core';
import { HttpGETService }					from '../../services/http/get.service';
import { Footer }							from './footer.model';
import { Popup } 							from '../../modules/popup/popup.model';

@Component({
	selector: 'bnb-footer',
	templateUrl: './footer.html',
	styleUrls: ['./footer.less']
})

export class FooterComponent implements AfterViewInit {

	public footer: any;
	public popup: Popup;

	@Input() page;

	constructor(private getService: HttpGETService)
	{
		this.footer = {
			'loading': true
		};
		this.popup = new Popup();
	}

	ngAfterViewInit()
	{
		const path = this.page['langs'][this.page['langIndex']] + '/' + 'footer.json';

		this.getService.get(path).subscribe(data => {
			this.footer = (new Footer(data)).data;
		});
	}

	public openPopup(title: string, lines: any): void
	{
		this.page['popup-is-active'] = true;
		this.popup.title = title;
		this.popup.lines = lines;
		this.popup.isVisible = true;
	}

	public popupOnClose(): void
	{
		this.page['popup-is-active'] = false;
	}

}
