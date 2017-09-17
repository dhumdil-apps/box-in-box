import { Component, Input } from '@angular/core';
import { Popup } from './popup.model';

@Component({
	selector: 'bnb-popup',
	templateUrl: './popup.html',
	styleUrls: ['./popup.less']
})

export class PopupComponent {

	@Input() popup: Popup;

	constructor()
	{}

	public img(filename: string): string
	{
		return '/assets/app/img/' + filename;
	}

	public close(): void
	{
		this.popup['isVisible'] = false;
	}

}
