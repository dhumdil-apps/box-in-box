import { Component, AfterViewInit } 	from '@angular/core';
import { HttpGETService } 				from '../../../services/http/get.service';

@Component({
	selector: 'bnb-yt',
	templateUrl: './yt.html',
	styleUrls: ['./yt.less']
})

export class YTComponent implements AfterViewInit {

	public yt: any;
	public player: any;

	constructor(private getService: HttpGETService)
	{
		this.yt = {
			'loading': true,
			'active-id': '', // selected video
			'active-album': -1, // selected album
			'style': '', // minimized, maximized
			'albums': []
		}
	}

	ngAfterViewInit()
	{
		this.getService.get('albums.json').subscribe(data => {
			this.yt.albums = data;
			this.yt['loading'] = false;
		});
	}

	private savePlayer(player): void
	{
		this.player = player;
		console.log('player instance', player)
	}

	private onStateChange(event): void
	{
		console.log('player state', event.data);
	}

	public selectVideo(id: string): void
	{
		this.yt['active-id'] = ''; // deselect
		// this.maximizeYT(); // maximize

		setTimeout(() => {
			this.yt['active-id'] = id; // reselect
		}, 10);
	}

	public minimizeYT(): void
	{
		this.yt['style'] = 'minimized';
	}

	public maximizeYT(): void
	{
		this.yt['style'] = 'maximized';
	}

	public playVideo(): void
	{
		this.player.playVideo();
	}

	public pauseVideo(): void
	{
		this.player.pauseVideo();
	}

	public getStyle(index: number): string
	{
		if (index === 0)
		{
			return 'focused';
		}
		if (index === 1)
		{
			return 'focus-previous'
		}
		if (index === 2)
		{
			return 'focus-next';
		}
		return '';
	}

	public openAlbum(index: number): void
	{
		console.log('openning', index);
	}

	public focusAlbum(index: number): void
	{
		console.log('focusing', index);
	}

	public isActiveAlbum(index: number): boolean
	{
		if (index === 0)
		{
			return (true);
		}

		return (false);
	}

	public selectAlbum(index: number): void
	{
		console.log('selecting', index);
	}
}
