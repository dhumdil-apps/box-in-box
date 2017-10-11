import { Dropdown } from '../dropdown/dropdown.model';

export class Link {

	public link: any;

	constructor(link: any)
	{
		try
		{
			if (link.type !== 'dropdown')
			{
				this.link = {
					'id':		link.id,
					'type':		link.type,
					'title':	link.title,
					'icon':		link.icon
				};
			}
			else
			{
				let list;

				this.link = {
					'id':	[],
					'type':	link.type,
					'icon':	link.icon
				};

				list = [];
				link.id.forEach((item) => {
					if (item.show)
					{
						this.link.id.push({
							'id': item.id,
							'type': item.type
						});
						list.push(item.title);
					}
				});

				this.link.dropdown = new Dropdown(list);
				this.link.dropdown.setTitle(link.title);
				this.link.dropdown.setCenterTitle();
				this.link.dropdown.setCenterListItems();
				this.link.dropdown.src = link.src;
			}
		}
		catch (e)
		{
			this.link = {};
		}
	}
}
