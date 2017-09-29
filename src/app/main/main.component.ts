import { Component, ViewChild, HostListener, OnInit } 	from '@angular/core';
import { Router }										from '@angular/router';
import { HttpGETService }								from '../services/http/get.service';
import { PerfectScrollbarDirective }	 				from 'ngx-perfect-scrollbar';
import { HeaderComponent } 								from './header/header.component';
import { Popup } 										from '../modules/popup/popup.model';
import { YTService } 									from '../services/communicate/yt.service';

@Component({
	selector: 'bnb-main',
	templateUrl: './main.html',
	styleUrls: ['./main.less'],
	providers: [ YTService ]
})

export class MainComponent implements OnInit {

	public page: any;
	public popup: Popup;
	public player: any;

	@ViewChild('bnb') bnb;

	@ViewChild(HeaderComponent) headerComponent: HeaderComponent;

	@ViewChild(PerfectScrollbarDirective) directiveScroll: PerfectScrollbarDirective;

	@HostListener('window:resize') onResize()
	{
		this.handleResize();
	}

	constructor(private router: Router, private getService: HttpGETService, private ytService: YTService)
	{
		this.init();

		ytService.onSelectVideo$.subscribe((album) =>
		{
			console.log('album:', album);

			this.scrollTo('content');

			this.page ['player'] ['loading'] = true;

			this.page ['album'] ['active'] = true;
			this.page ['album'] ['videos'] = album.videos;
			this.page ['album'] ['albumIndex'] = album.albumIndex;
			this.page ['album'] ['videoIndex'] = album.videoIndex;

			this.updateVideoId();
		});

		ytService.onOpenAlbum$.subscribe(() =>
		{
			this.scrollTo('content');
			this.page ['album'] ['active'] = false;
			setTimeout(() => {
				this.page ['album'] ['active'] = true;
			}, 20);
		});

		ytService.onPause$.subscribe(() =>
		{
			this.pauseVideo();
		});

		ytService.onPlay$.subscribe(() =>
		{
			this.playVideo();
		});

	}

	ngOnInit()
	{
		this.handleResize();
	}

	private init()
	{
		this.page = {
			'path': 'assets/app/img/', // path to icons
			'browser-height': 0, // user's web browser
			'browser-width': 0, // user's web browser
			'fixed-header': false, // header
			'scroll-sections': ['header', 'content', 'footer'], // list sections for scrolling
			'langs':  ['en'],
			'langIndex': 0,
			'loading': true,
			'header-loaded': false,
			'header-len': 0,
			'full-header': false,
			'popup-is-active': false,
			'player': {}, // youtube player visibility
			'album': {}, // album visibility
		};

		this.popup = new Popup();

		this.page['player'] = {
			'active': false,
			'id': '',
			'loading': false
		};

		this.page['album'] = {
			'active': false,
			'albumIndex': -1,
			'videoIndex': -1,
			'videos': []
		};

		this.getService.get('app.json').subscribe(data => {

			try
			{
				this.page['langs'] = data['langs'];
				this.page['langIndex'] = data['langIndex'];
			}
			catch (e)
			{
				this.page['langs'] = ['en'];
				this.page['langIndex'] = 0;
			}

			this.ytService.updatePath({
				'app': this.page ['path'],
				'admin': this.page ['langs'] [ this.page['langIndex'] ]
			});

			this.page['loading'] = false;

		});

	}

	public onScroll()
	{
		this.page['fixed-header'] = (this.getScrollTop() >= (this.page['browser-height'] - 51));

		if (this.page['header-loaded'] && this.page['full-header'])
		{
			this.headerComponent.closeMenu();
		}
	}

	public navigateTo(navigation: any): void
	{
		switch (navigation.type)
		{
			case 'content':
			{
				this.scrollTo('content');
				this.router.navigate([navigation.id]);
				return;
			}
			case 'scroll':
			{
				this.scrollTo(navigation.id);
				return;
			}
			default: return;
		}

	}

	private scrollTo(section: string): void
	{
		if (section === this.page['scroll-sections'][1])
		{
			this.directiveScroll.scrollToY(this.page['browser-height'] - 50, 500);
		}
		else if (section === this.page['scroll-sections'][2])
		{
			this.directiveScroll.scrollToY(this.getScrollHeight() - this.getOffsetHeight(), 500);
		}
		else
		{
			this.directiveScroll.scrollToY(0 - this.getScrollHeight(), 800);
		}
	}

	public handleResize()
	{
		if (this.bnb.nativeElement.offsetParent.clientWidth !== this.page['browser-width'])
		{
			this.page['browser-width'] = this.bnb.nativeElement.offsetParent.clientWidth;

			if (this.page['header-loaded'])
			{
				this.page['full-header'] =  (this.page['browser-width'] <= ((this.page['header-len'] * 250) + 200));

				if (this.page['full-header'])
				{
					this.headerComponent.resetAnimation();
					this.headerComponent.closeMenu();
				}
			}
		}
		if (this.bnb.nativeElement.offsetParent.clientHeight !== this.page['browser-height'])
		{
			this.page['browser-height'] = this.bnb.nativeElement.offsetParent.clientHeight;
		}
	}

	public openPopup(ev: any): void
	{
		this.popup.title = ev.title;
		this.popup.lines = ev.lines;
		this.popup.isVisible = true;
	}

	private getScrollTop(): number
	{
		return this.bnb.nativeElement.scrollTop;
	}

	private getOffsetHeight(): number
	{
		return this.bnb.nativeElement.offsetHeight;
	}

	private getScrollHeight(): number
	{
		return this.bnb.nativeElement.scrollHeight;
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
			if (this.page ['player'] ['loading'] && event.data > 0)
			{
				this.page ['player'] ['loading'] = false;
				this.page ['player'] ['active'] = true;
			}
			this.ytService.stateChanged(event.data);
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
		this.page['player'].active = !this.page['player'].active;
	}

	public toggleAlbum(): void
	{
		console.log('album toggled');

		if (this.page['player'].active)
		{
			this.page['player'].active = false;
		}
		else
		{
			if (this.page ['album'] ['albumIndex'] === -1)
			{
				this.closeAlbum();
			}
			else
			{
				this.ytService.toggleAlbum(this.page ['album'] ['albumIndex']);
			}
		}
	}

	public closeAlbumAndPlayer(): void
	{
		console.log('album & player closed');
		this.closePlayer();
		this.closeAlbum();
	}

	private getVideoId(): string
	{
		try
		{
			// TODO: ?? -> const id = ...; return id;
			return (this.page ['album'] ['videos'] [this.page ['album'] ['videoIndex']] ['id']);
		}
		catch (e)
		{
			return ('');
		}
	}

	private playNextVideo(): void
	{
		this.ytService.stateChanged(-2);

		try {
			this.page ['album'] ['videoIndex']++;

			if (this.page ['album'] ['videoIndex'] < this.page ['album'] ['videos'].length)
			{
				this.ytService.updateSelectedVideo({
					'albumIndex': this.page ['album'] ['albumIndex'],
					'videoIndex': this.page ['album'] ['videoIndex'],
					'videos': this.page ['album'] ['videos']
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
			this.closePlayer();
		}
	}

	private closePlayer(): void
	{
		this.page ['player'] ['active'] = false;
		this.page ['album'] ['videoIndex'] = -1;
		// this.page ['album'] ['albumIndex'] = -1;
		this.ytService.stateChanged(0);

		setTimeout(() => {
			this.page ['player'] ['id'] = '';
		}, 150);
	}

	private closeAlbum(): void
	{
		this.page ['album'] ['active'] = false;
		// this.page ['album'] ['videoIndex'] = -1;
		this.page ['album'] ['albumIndex'] = -1;
		this.ytService.closeAlbum();
	}

	private updateVideoId(): void
	{
		this.ytService.stateChanged(-4); // loading video
		this.page ['player'] ['id'] = '';

		setTimeout(() =>
		{
			this.page ['player'] ['id'] = this.getVideoId();
		}, 20);
	}

}
