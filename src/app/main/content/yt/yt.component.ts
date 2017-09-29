import { Component, ViewChild, HostListener, AfterViewInit, OnDestroy } from '@angular/core';
import { Subscription }   												from 'rxjs/Subscription';
import { HttpGETService } 												from '../../../services/http/get.service';
import { YTService } 													from '../../../services/communicate/yt.service';

@Component({
	selector: 'bnb-yt',
	templateUrl: './yt.html',
	styleUrls: ['./yt.less']
})

export class YTComponent implements AfterViewInit, OnDestroy {

	public yt: any;

	public btnsLocked: boolean;
	public highlightAlbum: boolean;
	public path: any;

	public subscription: Subscription;

	@ViewChild('ytStyle') ytStyle;

	@HostListener('window:resize') onResize()
	{
		this.handleResize();
	}

	constructor(private getService: HttpGETService, private ytService: YTService)
	{
		this.init();

		this.subscription = ytService.onUpdateSelectedVideo$.subscribe( (album) =>
		{
			this.yt ['active-album-index'] = album ['albumIndex'];
			this.yt ['active-video-index'] = album ['videoIndex'];
		});

		this.subscription = ytService.onStateChanged$.subscribe((state) =>
		{
			console.log(state);

			if (state === 0)
			{
				this.yt['active-album-index'] = -1;
				this.yt['active-video-index'] = -1;
			}
			else
			{
				this.yt['state'] = state;
			}
		});

		this.subscription = ytService.onUpdatePath$.subscribe((path) =>
		{
			this.path.admin = path.admin;
			this.path.app = path.app;
		});

		this.subscription = ytService.onCloseAlbum$.subscribe(() =>
		{
			this.closeAlbum();
		});

		this.subscription = ytService.onToggleAlbum$.subscribe((albumIndex) =>
		{
			this.toggleAlbum(albumIndex);
		});

	}

	ngAfterViewInit()
	{
		setTimeout(() => {

			const path = this.path ['admin'] + '/albums.json';

			this.getService.get(path).subscribe(data => {

				this.yt.albums = data;
				this.yt['loading'] = false;

				setTimeout(() => {
					this.handleResize();
				}, 100);

			});
		}, 500);
	}

	private init(): void
	{
		this.btnsLocked = false;
		this.highlightAlbum = false;

		this.path = {
			'app': '',
			'admin': ''
		};

		this.yt = {
			'loading': true,
			'selected-album': 0, // selected album
			'focused-album': 0, // focused album
			'active-album-index': -1,
			'active-video-index': -1,
			'popup-active': false, // album visibility
			'size': 0,
			'state': -2, // loading
			'albums': []
		};
	}

	private handleResize(): void
	{
		console.log(this.ytStyle);

		this.yt['size'] = min(this.ytStyle.nativeElement.clientHeight - 100, this.ytStyle.nativeElement.clientWidth / 2);

		function min(x, y) {
			if (x < y) {
				return (x);
			}
			return (y);
		}

	}

	public selectVideo(albumIndex: number, videoIndex): void
	{
		if (this.isSelectedVideo(albumIndex, videoIndex))
		{
			this.playVideo();
		}
		else
		{
			this.yt['state'] = -2;
			this.yt['active-album-index'] = albumIndex;
			this.yt['active-video-index'] = videoIndex;
			this.ytService.selectVideo({
				'albumIndex': albumIndex,
				'videoIndex': videoIndex,
				'videos': this.yt ['albums'] [albumIndex].videos
			});
		}
	}

	public isSelectedVideo(albumIndex: number, videoIndex: number): boolean
	{
		return (this.yt['active-album-index'] === albumIndex && this.yt['active-video-index'] === videoIndex);
	}

	public playVideo(): void
	{
		if (this.yt['state'] !== 1)
		{
			this.yt['state'] = -3;
			this.ytService.play();
		}
	}

	public pauseVideo(): void
	{
		this.yt['state'] = 2;
		this.ytService.pause();
	}

	public getStyle(index: number): string
	{
		if (index === this.yt['focused-album'])
		{
			return 'focused';
		}
		if (index === this.yt['focused-album'] - 1)
		{
			return 'focus-previous'
		}
		if (index === this.yt['focused-album'] + 1)
		{
			return 'focus-next';
		}
		if (index === this.yt['focused-album'] - 2)
		{
			return 'unfocus-previous';
		}
		if (index === this.yt['focused-album'] + 2)
		{
			return 'unfocus-next';
		}
		return '';
	}

	public openAlbum(index: number): void
	{
		console.log('open albumIndex', index);
		this.yt['selected-album'] = index;
		this.yt['popup-active'] = true;
		this.highlightAlbum = false;
		this.ytService.openAlbum();
	}

	public closeAlbum(): void
	{
		console.log('closing', this.yt['selected-album']);
		this.yt['popup-active'] = false;
	}

	public toggleAlbum(albumIndex: number): void
	{
		this.yt['popup-active'] = !this.yt['popup-active'];

		if (albumIndex !== -1)
		{
			this.yt['selected-album'] = albumIndex;
		}
	}

	public focusAlbum(index: number): void
	{
		if (this.isActiveAlbum(index))
		{
			console.log('highlighting', index);
			this.highlightAlbum = true;
		}
		else
		{
			console.log('focusing', index);
			this.highlightAlbum = false;
			this.yt['focused-album'] = index;
		}
	}

	public isActiveAlbum(index: number): boolean
	{
		return (index === this.yt['focused-album']);
	}

	public selectAlbum(index: number, timeout = false): void
	{
		console.log('selecting', index);
		this.highlightAlbum = false;

		if (timeout || !this.btnsLocked) {

			this.btnsLocked = true;

			if (this.yt['focused-album'] > index)
			{
				this.yt['focused-album']--;
				console.log('focusing', this.yt['focused-album']);

				setTimeout(() => {
					this.selectAlbum(index, true);
				}, 100);
			}
			else if (this.yt['focused-album'] < index)
			{
				this.yt['focused-album']++;
				console.log('focusing', this.yt['focused-album']);

				setTimeout(() => {
					this.selectAlbum(index, true);
				}, 100);
			}
			else
			{
				this.btnsLocked = false;
			}
		}
	}

	ngOnDestroy()
	{
		// prevent memory leak when component destroyed
		this.subscription.unsubscribe();
	}

}
