import { Component, ViewChild, HostListener, OnInit } 	from "@angular/core";
import { Router }										from "@angular/router";
import { PerfectScrollbarDirective }	 				from "ngx-perfect-scrollbar";
import { HttpService } 									from "./services/http.service";
import { Popup } 										from "./page/modules/popup/popup.model";
import { Slider }										from "./page/content/slider/slider.model";
import { Navigation }									from "./page/content/header/header.model";
import { Footer }										from "./page/content/footer/footer.model";
import { SliderComponent } 								from "./page/content/slider/slider.component";
import { HeaderComponent } 								from "./page/content/header/header.component";
import { YoutubePlayerComponent } 						from "./page/modules/youtube-player/youtube-player.component";

@Component({
	selector: 'bnb-main',
	templateUrl: './main.html',
	styleUrls: ['./main.less']
})

export class MainComponent implements OnInit {

	public loading = true;
	public app: any;
	public popup: Popup;
	public slider: Slider = new Slider();
	public navigation: Navigation = new Navigation();
	public footer: Footer = new Footer();
	public videoAlbum: any = [];

	@ViewChild('bnb') bnb;
	@ViewChild(PerfectScrollbarDirective) directiveScroll: PerfectScrollbarDirective;
	@ViewChild(SliderComponent) sliderComponent: SliderComponent;
	@ViewChild(HeaderComponent) headerComponent: HeaderComponent;
	@ViewChild(YoutubePlayerComponent) youtubePlayer: YoutubePlayerComponent;

	@HostListener('window:hashchange') handleHashchange()
	{
		this.validateRoute(window.location.hash.slice(1));
	}
	@HostListener('window:resize') handleResize()
	{
		this.onResize();
	}

	constructor(private router: Router, private http: HttpService)
	{
		this.app = {
			'active-route': '',
			'langs': {
				'selected': '',
				'list': []
			},
			'path': {
				'admin': 'assets/admin/json/',
				'app': 'assets/app/img/'
			},
			'browser': {
				'w': 0,
				'h': 0
			},
			'header': {
				'isFixed': false,
				'isFull': false,
				'length': 0
			},
			'scroll-sections': {
				'active': 0,
				'list': ['header', 'content', 'footer']
			},
			'player': {
				'isVisible': false,
				'state': 0,
				'id': ''
			},
			'album': {
				'size': 0
			}
		};

		this.http.get(this.app['path'].admin + 'langs.json').subscribe(data =>
		{
			this.app['langs'].list = data.langs;
		});

		this.popup = new Popup();
	}

	ngOnInit(): void
	{
		this.onResize();
	}

	private validateRoute(route: string): void
	{
		this.app['player'].isVisible = false;

		if (route === '/video-album')
		{
			this.app['active-route'] = 'video-album';
		}
		else if (route === '/photo-album')
		{
			this.app['active-route'] = 'photo-album';
		}
		else
		{
			this.app['active-route'] = '404';
		}
	}

	public selectLang(lang: string): void
	{
		if (this.app['langs'].selected !== lang)
		{
			this.app['langs'].selected = lang;

			// slider
			this.http.get(this.app['path'].admin + lang + '/slider.json').subscribe(sliderData =>
			{
				this.slider = new Slider(sliderData);
				this.slider.loading = false;

				// header
				this.http.get(this.app['path'].admin + lang + '/header.json').subscribe(headerData =>
				{
					this.navigation = new Navigation(headerData);
					this.app['header'].length = this.navigation.links.length;
					this.app['header'].isFull =  (this.app['browser'].w <= ((this.navigation.links.length * 250) + 200));
					this.navigation.loading = false;

					// footer
					this.http.get(this.app['path'].admin + lang + '/footer.json').subscribe(footerData =>
					{
						this.footer = new Footer(footerData);
						this.footer.loading = false;

						// video-album
						this.http.get(this.app['path'].admin + lang + '/video-album.json').subscribe(data =>
						{
							this.videoAlbum = data;
							this.validateRoute(window.location.hash.slice(1));
							this.loading = false;
							this.sliderComponent.setAutoSlideOn();
							this.scrollTo('header');
						});
					});
				});
			});
		}
		else
		{
			this.slider.loading = false;
			this.navigation.loading = false;
			this.footer.loading = false;
			this.loading = false;
			this.scrollTo('header');
		}
	}

	public onSelectLang(): void
	{
		this.loading = true;
		setTimeout(() =>
		{
			this.slider.loading = true;
			this.navigation.loading = true;
			this.footer.loading = true;
		}, 100);
	}

	private onResize(): void
	{
		this.app['browser'].w = this.bnb.nativeElement.offsetParent.clientWidth;
		this.app['browser'].h = this.bnb.nativeElement.offsetParent.clientHeight - 50;
		this.app['album'].size = min(this.app['browser'].h - 100, this.app['browser'].w / 2);

		if (!this.loading)
		{
			this.app['header'].isFull = (this.app['browser'].w <= ((this.app['header'].length * 250) + 200));

			if (this.app['header'].isFull)
			{
				this.headerComponent.resetAnimation();
				this.headerComponent.closeMenu();
			}
		}

		function min(x, y)
		{
			if (x < y) {
				return (x);
			}
			return (y);
		}
	}

	public onScroll(): void
	{
		this.app['header'].isFixed = (this.bnb.nativeElement.scrollTop > (this.app['browser'].h));

		if (this.app['header'].isFull)
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
				this.validateRoute(navigation.id);
				return;
			}
			case 'scroll':
			{
				this.scrollTo(navigation.id);
				return;
			}
			case 'redirect':
			{
				window.open(navigation.id);
				return;
			}
			default: return;
		}
	}

	private scrollTo(section: string): void
	{
		if (section === this.app['scroll-sections'] ['list'] [1])
		{
			this.app['scroll-sections'] ['active'] = 1;
			this.directiveScroll.scrollToY(this.app['browser'].h, 500);
		}
		else if (section === this.app['scroll-sections'] ['list'] [2])
		{
			this.app['scroll-sections'] ['active'] = 2;
			this.directiveScroll.scrollToY((this.app['browser'].h * 2), 500);
		}
		else
		{
			this.app['scroll-sections'] ['active'] = 0;
			this.directiveScroll.scrollToY(0, 500);
		}
	}

	public isActiveRoute(route: string): boolean
	{
		return (route === this.app['active-route']);
	}

	public openPopup(ev: any): void
	{
		this.popup.title = ev.title;
		this.popup.lines = ev.lines;
		this.popup.isVisible = true;
	}

	public onSelectID(id: string): void
	{
		console.log('selected id', id);
		this.youtubePlayer.selectID(id)
	}

	public playYT(): void
	{
		this.youtubePlayer.play();
	}

	public closeYT(): void
	{
		this.youtubePlayer.close();
	}

	public pauseYT(): void
	{
		this.youtubePlayer.pause();
	}

	public toggleYT(): void
	{
		if (this.app['player'].isVisible)
		{
			if (this.bnb.nativeElement.scrollTop === this.app['browser'].h)
			{
				this.app['player'].isVisible = false;
			}
		}
		else
		{
			this.app['player'].isVisible = true;
		}
		this.scrollTo('content');
	}

}
