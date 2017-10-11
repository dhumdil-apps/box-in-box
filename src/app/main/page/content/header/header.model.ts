import { Link }		from '../../modules/link/link.model';

export class Navigation
{
	public loading = true;
	public links = [];
	public isVisible = false;
	public active = 0;
	public menu = {
		'title': '',
		'icon':	'menu.svg'
	};

	constructor(data: any = [])
	{
		try
		{
			data.forEach((item) =>
			{
				if (item.show)
				{
					this.links.push((new Link(item)).link);
				}
			});
		}
		catch (e)
		{
			this.links = [];
		}
	}
}
