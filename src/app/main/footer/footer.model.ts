export class Footer {

	public data: any;
	public loading: boolean;

	constructor(data: any)
	{
		try
		{
			this.data = data;
			this.loading = false;
		}
		catch (e)
		{
			this.data = {};
		}
	}
}
