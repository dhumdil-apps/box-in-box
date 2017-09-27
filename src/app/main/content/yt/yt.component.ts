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
	public basePath = 'assets/app/img/';
	public subscription: Subscription;

	@ViewChild('ytStyle') ytStyle;

	@HostListener('window:resize') onResize()
	{
		this.handleResize();
	}

	constructor(private getService: HttpGETService, private ytService: YTService)
	{
		this.yt = {
			'loading': true,
			'album-id': -1, // selected album
			'active-album': 0, // focused album
			'style': '',
			'size': 0,
			'albums': []
		};
		this.btnsLocked = false;
		this.highlightAlbum = false;

		this.subscription = ytService.onStateChanged$.subscribe((state) =>
		{
			console.log(state);
		});
	}

	ngAfterViewInit()
	{
		this.getService.get('albums.json').subscribe(data => {
			this.yt.albums = data;
			this.yt['loading'] = false;
			setTimeout(() => {
				this.handleResize();
			}, 500);
		});
	}

	private handleResize(): void
	{
		// console.log(this.ytStyle);
		this.yt['size'] = this.ytStyle.nativeElement.clientHeight - 100;
	}

	public selectVideo(id: string): void
	{
		this.ytService.selectId(id);
	}

	public playVideo(): void
	{
		this.ytService.play();
	}

	public pauseVideo(): void
	{
		this.ytService.pause();
	}

	public getStyle(index: number): string
	{
		if (index === this.yt['active-album'])
		{
			return 'focused';
		}
		if (index === this.yt['active-album'] - 1)
		{
			return 'focus-previous'
		}
		if (index === this.yt['active-album'] + 1)
		{
			return 'focus-next';
		}
		if (index === this.yt['active-album'] - 2)
		{
			return 'unfocus-previous';
		}
		if (index === this.yt['active-album'] + 2)
		{
			return 'unfocus-next';
		}
		return '';
	}

	public openAlbum(index: number): void
	{
		console.log('openning', index);

		this.yt['album-id'] = index;
		this.yt['style'] = 'maximized';
		this.highlightAlbum = false;
	}

	public closeAlbum(): void
	{
		console.log('closing', this.yt['album-id']);

		this.yt.style = '';
		this.yt['style'] = 'minimized';
		this.yt['album-id'] = -1;
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
			this.yt['active-album'] = index;
		}
	}

	public isActiveAlbum(index: number): boolean
	{
		return (index === this.yt['active-album']);
	}

	public selectAlbum(index: number, timeout = false): void
	{
		console.log('selecting', index);
		this.highlightAlbum = false;

		if (timeout || !this.btnsLocked) {

			this.btnsLocked = true;

			if (this.yt['active-album'] > index)
			{
				this.yt['active-album']--;
				console.log('focusing', this.yt['active-album']);

				setTimeout(() => {
					this.selectAlbum(index, true);
				}, 100);
			}
			else if (this.yt['active-album'] < index)
			{
				this.yt['active-album']++;
				console.log('focusing', this.yt['active-album']);

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
