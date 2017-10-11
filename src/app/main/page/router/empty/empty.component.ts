import { Component }		from "@angular/core";
import { Meta, Title } 		from "@angular/platform-browser";

@Component({
	selector: 'bnb-empty',
	template: `<div></div>`,
	styleUrls: []
})

export class EmptyComponent
{
	constructor(title: Title, meta: Meta)
	{
		title.setTitle('Box in Box');
		meta.addTags([
			{
				name: 'author',
				content: 'Box in Box'
			},
			{
				name: 'keywords',
				content: 'SK, RO'
			},
			{
				name: 'description',
				content: 'Pick a lang'
			}
		]);
	}
}
