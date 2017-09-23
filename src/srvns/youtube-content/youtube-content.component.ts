import { Component, Input }		from '@angular/core';

@Component({
	selector: 'bnb-youtube-content',
	templateUrl: './youtube-content.html',
	styleUrls: ['./youtube-content.less']
})

export class YTContentComponent {

	public ids: any;
	public activeId: number;
	public isMiminized: boolean;
	public isMaximized: boolean;

	@Input() page;

	constructor()
	{
		this.isMaximized = false;
		this.isMiminized = true;
		this.activeId = -1;

		this.ids = [
			'M7lc1UVf-VE?origin=http://example.com',
			'DuKsiwS5xw'
		];
	}

	public selectID(index: number): void
	{
		this.activeId = -1;
		setTimeout(() => {
			this.maximizeYT();
			this.activeId = index;
		}, 10);
	}

	public minimizeYT(): void
	{
		console.log('minimize');
	}

	public maximizeYT(): void
	{
		console.log('maximize');
	}

}
