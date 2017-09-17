import { Link }		from '../../modules/link/link.model';

export class Navigation {

	public links: any;
	public isVisible: boolean;
	public loading: boolean;
	public active: number;
	public animation: string;

	constructor(data: any)
	{
		this.active = 0;
		this.links = [];

		try
		{
			data.forEach((item) => {
				if (item.show)
				{
					this.links.push((new Link(item)).link);
				}
			});
			this.loading = false;
		}
		catch (e)
		{
			this.links = [];
			this.loading = true;
		}
	}
}
