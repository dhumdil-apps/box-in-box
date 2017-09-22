import { Component, Input, AfterViewInit }	from '@angular/core';

@Component({
	selector: 'bnb-youtube-content',
	templateUrl: './youtube-content.html',
	styleUrls: ['./youtube-content.less']
})

export class YTContentComponent implements AfterViewInit {

	ids: any;
	players: any;

	@Input() page;

	constructor()
	{
		this.ids = [];
		this.players = [];
	}

	ngAfterViewInit()
	{
		this.ids = ['qDuKsiwS5xw'];
	}

	public savePlayer (player): void
	{
		this.players.push(player);
		console.log('players', this.players);
	}

	public onStateChange(event): void
	{
		console.log('state', event.data);
	}

	public playVideo(i): void
	{
		this.players[i].playVideo();
	}

	public pauseVideo(i: number): void
	{
		this.players[i].pauseVideo();
	}

}
