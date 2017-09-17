import { Component, Input } from '@angular/core';

@Component({
	selector: 'bnb-link',
	templateUrl: './link.html',
	styleUrls: ['./link.less']
})

export class LinkComponent {

	@Input() link;
	@Input() path;

	public isset(str: string): boolean
	{
		return (str !== '');
	}

	public src(str: string): string
	{
		return (this.path + str);
	}

}
