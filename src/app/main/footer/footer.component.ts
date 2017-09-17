import { Component, AfterViewInit, Input }	from '@angular/core';
import { HttpGETService }					from '../../services/http/get.service';
import { Footer }							from './footer.model';

@Component({
	selector: 'bnb-footer',
	templateUrl: './footer.html',
	styleUrls: ['./footer.less']
})

export class FooterComponent implements AfterViewInit {

	public footer: any;

	@Input() page;

	constructor(private getService: HttpGETService)
	{
		this.footer = {
			'loading': true
		};
	}

	ngAfterViewInit()
	{
		const path = this.page['langs'][this.page['langIndex']] + '/' + 'footer.json';

		this.getService.get(path).subscribe(data => {
			this.footer = new Footer(data);
		});
	}

}
