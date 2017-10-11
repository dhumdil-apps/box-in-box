import { Component }	from '@angular/core';
import { Meta, Title }	from '@angular/platform-browser';

@Component({
	selector: 'bnb-not-found',
	templateUrl: './not-found.html',
	styleUrls: ['./not-found.less']
})

export class NotFoundComponent {

	constructor(title: Title, meta: Meta)
	{
		title.setTitle('404 Not Found');

		meta.addTags([
			{
				name: 'author',
				content: 'Box in Box'
			},
			{
				name: 'keywords',
				content: 'HTTP 404, 404 Not Found, 404'
			},
			{
				name: 'description',
				content: 'The requested resource could not be found.'
			}
		]);
	}
}
