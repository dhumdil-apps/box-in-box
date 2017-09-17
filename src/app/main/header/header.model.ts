import { Link }		from '../../modules/link/link.model';

export class Navigation {

	public links: any;
	public isVisible: boolean;
	public loading: boolean;
	public active: number;
	public animation: string;

	constructor(data: any)
	{
		this.loading = true;
		this.active = 0;
		this.isVisible = false;
		this.animation = 'void';
		this.links = [];

		try
		{
			data.forEach((item) => {
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
