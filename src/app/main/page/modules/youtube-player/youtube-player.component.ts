import { Component, Output, EventEmitter } 			from '@angular/core';
import { YoutubePlayerService } from './youtube-player.service';


@Component({
	selector: 'bnb-youtube-player',
	templateUrl: './youtube-player.html',
	styleUrls: ['./youtube-player.less'],
	providers: [ YoutubePlayerService ]
})

export class YoutubePlayerComponent {

	public player: any;
	public yt: any;

	@Output() scroll = new EventEmitter();

	constructor(private ytPlayer: YoutubePlayerService)
	{

		this.yt['player'] = {
			'active': false,
			'id': '',
			'loading': false
		};

		this.yt['album'] = {
			'active': false,
			'albumIndex': -1,
			'videoIndex': -1,
			'videos': []
		};

		ytPlayer.onSelectVideo$.subscribe((album) =>
		{
			console.log('video-album:', album);

			this.scroll.emit('content');

			this.yt['player'] ['loading'] = true;

			this.yt['album'] ['active'] = true;
			this.yt['album'] ['videos'] = album.videos;
			this.yt['album'] ['albumIndex'] = album.albumIndex;
			this.yt['album'] ['videoIndex'] = album.videoIndex;

			this.updateVideoId();
		});

		ytPlayer.onOpenAlbum$.subscribe(() =>
		{
			this.scroll.emit('content');
			this.yt['album'] ['active'] = false;
			setTimeout(() => {
				this.yt['album'] ['active'] = true;
			}, 20);
		});

		ytPlayer.onPause$.subscribe(() =>
		{
			this.pauseVideo();
		});

		ytPlayer.onPlay$.subscribe(() =>
		{
			this.playVideo();
		});

	}

	public savePlayer(player): void
	{
		console.log('player', player);
		this.player = player;
		this.playVideo();
	}

	public onStateChange(event): void
	{
		console.log('player state', event.data);

		if (event.data === 0)
		{
			this.playNextVideo();
		}
		else
		{
			if (this.yt['player'] ['loading'] && event.data === 1)
			{
				this.yt['player'] ['loading'] = false;
				this.yt['player'] ['active'] = true;
			}

			this.ytPlayer.stateChanged(event.data);
		}
	}

	public playVideo(): void
	{
		this.player.playVideo();
	}

	public pauseVideo(): void
	{
		this.player.pauseVideo();
	}

	public togglePlayer(): void
	{
		console.log('player toggled');
		this.yt['player'].active = !this.yt['player'].active;
	}

	public toggleAlbum(): void
	{
		console.log('video-album toggled');

		if (this.yt['player'].active)
		{
			this.yt['player'].active = false;
		}
		else
		{
			if (this.yt['album'] ['albumIndex'] === -1)
			{
				this.closeAlbum();
			}
			else
			{
				this.ytPlayer.toggleAlbum(this.yt['album'] ['albumIndex']);
			}
		}
	}

	public closeAlbumAndPlayer(): void
	{
		console.log('video-album & player closed');
		this.closePlayer();
		this.closeAlbum();
	}

	private getVideoId(): string
	{
		try
		{
			console.log(this.yt['album'] ['videos'] [this.yt['album'] ['videoIndex']] ['id']);
			return (this.yt['album'] ['videos'] [this.yt['album'] ['videoIndex']] ['id']);
		}
		catch (e)
		{
			console.log(e.message);
			return ('');
		}
	}

	private playNextVideo(): void
	{
		this.ytPlayer.stateChanged(-2);

		try {
			this.yt['album'] ['videoIndex']++;

			if (this.yt['album'] ['videoIndex'] < this.yt['album'] ['videos'].length)
			{
				this.ytPlayer.updateSelectedVideo({
					'albumIndex': this.yt['album'] ['albumIndex'],
					'videoIndex': this.yt['album'] ['videoIndex'],
					'videos': this.yt['album'] ['videos']
				});
				this.updateVideoId();
			}
			else
			{
				this.closePlayer();
			}
		}
		catch (e)
		{
			console.log(e.message);
			this.closePlayer();
		}
	}

	private closePlayer(): void
	{
		this.yt['player'] ['active'] = false;
		this.yt['album'] ['videoIndex'] = -1;
		this.ytPlayer.stateChanged(0);

		setTimeout(() => {
			this.yt['player'] ['id'] = '';
		}, 150);
	}

	private closeAlbum(): void
	{
		this.yt['album'] ['active'] = false;
		this.yt['album'] ['albumIndex'] = -1;
		this.ytPlayer.closeAlbum();
	}

	private updateVideoId(): void
	{
		this.ytPlayer.stateChanged(-2);
		this.yt['player'] ['id'] = '';

		setTimeout(() =>
		{
			this.yt['player'] ['id'] = this.getVideoId();
		}, 50);
	}

}
