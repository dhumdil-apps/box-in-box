export class Popup {

	public isVisible: boolean;
	public title: string;
	public lines: any;

	constructor()
	{
		this.isVisible = false;
		this.title = 'Title';
		this.lines = [
			'Line 1',
			'Line 2',
			'...'
		];
	}

}
