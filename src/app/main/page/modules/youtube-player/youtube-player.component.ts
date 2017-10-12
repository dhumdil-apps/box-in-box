import { Component, Input } from '@angular/core';

@Component({
	selector: 'bnb-youtube-player',
	templateUrl: './youtube-player.html',
	styleUrls: ['./youtube-player.less']
})

export class YoutubePlayerComponent {

	public yt: any;

	@Input() app;

	public savePlayer(player): void
	{
		console.log('player', player);
		this.yt = player;
		this.app['player'].isVisible = true;
		this.play();
	}

	public onStateChange(ev): void
	{
		console.log('state', ev.data);
		this.app['player'].state = ev.data;

		if (this.app['player'].state === 0)
		{
			this.close();
		}
	}

	public play(): void
	{
		this.yt.playVideo();
	}

	public pause(): void
	{
		this.yt.pauseVideo();
	}

	public selectID(id: string): void
	{
		if (this.app['player'].id !== id)
		{
			this.app['player'].state = -2;
			this.app['player'].id = '';

			setTimeout(() =>
			{
				this.app['player'].id = id;
			}, 50);
		}
	}

	public close(): void
	{
		this.app['player'].state = 0;
		this.app['player'].id = '';
		this.app['player'].isVisible = false;
	}

}
