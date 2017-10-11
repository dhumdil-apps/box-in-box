import { Component, Input } from '@angular/core';
import { Popup } from './popup.model';

@Component({
	selector: 'bnb-popup',
	templateUrl: './popup.html',
	styleUrls: ['./popup.less']
})

export class PopupComponent {

	public animation = '';

	@Input() popup: Popup;

	public onClose(): void
	{
		this.animation = 'close';
		setTimeout(() =>
		{
			this.popup.isVisible = false;
		}, 300);
	}

}
