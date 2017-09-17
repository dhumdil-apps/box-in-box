import { Component  }	from '@angular/core';
import { Meta, Title }	from '@angular/platform-browser';

@Component({
	selector: 'bnb-empty-page',
	templateUrl: './empty-page.html',
	styleUrls: ['./empty-page.less']
})

export class EmptyPageComponent {

	constructor(title: Title, meta: Meta)
	{
		title.setTitle('Empty Page');

		meta.addTags([
			{ name: 'author',   content: 'Box in Box'},
			{ name: 'keywords', content: 'box in box, empty, plain'},
			{ name: 'description', content: 'Page with no content' }
		]);
	}

}
