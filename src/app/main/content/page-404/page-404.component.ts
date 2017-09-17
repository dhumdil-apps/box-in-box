import { Component }	from '@angular/core';
import { Meta, Title }	from '@angular/platform-browser';

@Component({
	selector: 'bnb-page-404',
	templateUrl: './page-404.html',
	styleUrls: ['./page-404.less']
})

export class Page404Component {

	constructor(title: Title, meta: Meta)
	{
		title.setTitle('Page Not Found');

		meta.addTags([
			{ name: 'author',   content: 'Box in Box'},
			{ name: 'keywords', content: 'box in box, 404, page not found'},
			{ name: 'description', content: 'Error 404: Page Not Found!' }
		]);
	}
}
