import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Popup } from './popup.model';

@Component({
	selector: 'bnb-popup',
	templateUrl: './popup.html',
	styleUrls: ['./popup.less']
})

export class PopupComponent {

	public animation = '';

	@Input() popup: Popup;
	@Output('close') close = new EventEmitter;

	public onClose(): void
	{
		this.animation = 'close';
		setTimeout(() =>
		{
			this.close.emit();
			this.popup.isVisible = false;
		}, 300);
	}

}
