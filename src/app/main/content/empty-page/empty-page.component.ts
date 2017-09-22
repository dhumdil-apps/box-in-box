import { Component } from '@angular/core';

@Component({
	selector: 'bnb-empty-page',
	templateUrl: './empty-page.html',
	styleUrls: ['./empty-page.less']
})

export class EmptyPageComponent {

	public loading: boolean;

	constructor()
	{
		this.loading = true;
		setTimeout(() => {
			this.loading = false;
		}, 1000);
	}

}
