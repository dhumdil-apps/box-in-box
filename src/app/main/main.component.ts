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
	public videoAlbums: any = [];

	@ViewChild('bnb') bnb;
	@ViewChild(PerfectScrollbarDirective) directiveScroll: PerfectScrollbarDirective;
	@ViewChild(SliderComponent) sliderComponent: SliderComponent;
	@ViewChild(HeaderComponent) headerComponent: HeaderComponent;

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
				'isLoaded': false,
				'length': 0
			},
			'scroll-sections': {
				'active': 0,
				'list': ['header', 'content', 'footer']
			},
			'player': {} // TODO
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

	private validateRoute(): void
	{
		// console.log(this.router.routerState.snapshot.url);
		if (this.router.routerState.snapshot.url === '/video-album')
		{
			this.app['active-route'] = 'video-album';
		}
		else if (this.router.routerState.snapshot.url === '/photo-album')
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
				this.app['header'].isLoaded = true;
				this.app['header'].length = this.navigation.links.length;
				console.log(this.app);
				this.app['header'].isFull =  (this.app['browser'].w <= ((this.navigation.links.length * 250) + 200));
				this.navigation.loading = false;

				// footer
				this.http.get(this.app['path'].admin + lang + '/footer.json').subscribe(footerData =>
				{
					this.footer = new Footer(footerData);
					this.footer.loading = false;
					this.sliderComponent.setAutoSlideOn();

					this.http.get(this.app['path'].admin + lang + '/video-album.json').subscribe(data =>
					{
						this.videoAlbums = data;
						this.validateRoute();
						this.loading = false;
					});
				});
			});
		});
	}

	private onResize(): void
	{
		this.app['browser'].w = this.bnb.nativeElement.offsetParent.clientWidth;

		if (!this.loading)
		{
			this.app['header'].isFull = (this.app['browser'].w <= ((this.app['header'].length * 250) + 200));

			if (this.app['header'].isFull)
			{
				this.headerComponent.resetAnimation();
				this.headerComponent.closeMenu();
			}
		}
		this.app['browser'].h = this.bnb.nativeElement.offsetParent.clientHeight - 50;

		this.app['album'].size = min(this.app['browser'].h - 50, this.app['browser'].w / 2);

		function min(x, y) {
			if (x < y) {
				return (x);
			}
			return (y);
		}
	}

	public onScroll(): void
	{
		this.app['header'].isFixed = (this.bnb.nativeElement.scrollTop > (this.app['browser'].h));

		if (!this.loading && this.app['header'].isFull)
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
				this.app['active-route'] = navigation.id;
				this.router.navigate([navigation.id]);
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

	public openPopup(ev: any): void
	{
		this.popup.title = ev.title;
		this.popup.lines = ev.lines;
		this.popup.isVisible = true;
	}

	public playYT(): void
	{
		console.log('playYT');
	}

	public stopYT(): void
	{
		console.log('stopYT');
	}

	public pauseYT(): void
	{
		console.log('pauseYT');
	}

	public toggleYT(): void
	{
		console.log('toggleYT');
	}

}
