import { Component, Input, Output, EventEmitter } 	from "@angular/core";
import { Footer } 									from "./footer.model";

@Component({
	selector: 'bnb-footer',
	templateUrl: './footer.html',
	styleUrls: ['./footer.less']
})

export class FooterComponent {

	@Input() app;
	@Input() footer;

	@Output() selectLang = new EventEmitter();
	@Output() popup = new EventEmitter();

	constructor()
	{
		this.footer = new Footer();
	}

	public openPopup(title: string, lines: any): void
	{
		this.popup.emit({
			'title': title,
			'lines': lines
		});
	}

	public src(filename: string): string
	{
		return (this.app['path'].app + filename);
	}

}
