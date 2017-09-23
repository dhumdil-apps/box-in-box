import { Component, ViewChild, HostListener, OnInit }	from '@angular/core';
import { Router }										from '@angular/router';
import { HttpGETService }								from '../services/http/get.service';
import { PerfectScrollbarDirective }	 				from 'ngx-perfect-scrollbar';
import { HeaderComponent } 								from './header/header.component';
import { YTContentComponent } 							from './content/youtube-content/youtube-content.component';

@Component({
	selector: 'bnb-main',
	templateUrl: './main.html',
	styleUrls: ['./main.less']
})

export class MainComponent implements OnInit {

	public page: any;

	@ViewChild('bnb') bnb;

	@ViewChild(HeaderComponent) headerComponent: HeaderComponent;
	@ViewChild(YTContentComponent) ytContentComponent: YTContentComponent;

	@ViewChild(PerfectScrollbarDirective) directiveScroll: PerfectScrollbarDirective;

	@HostListener('window:resize', ['$event']) onResize()
	{
		this.handleResize();
	}

	constructor(private router: Router, private getService: HttpGETService)
	{
		this.page = {
			'browser-height': 0, // user's web browser
			'browser-width': 0, // user's web browser
			'fixed-header': false, // header
			'scroll-sections': ['header', 'content', 'footer'], // list sections for scrolling
			'path': 'assets/app/img/', // path to icons
			'langs':  ['en'],
			'langIndex': 0,
			'loading': true,
			'header-loaded': false,
			'header-len': 0,
			'full-header': false,
			'popup-is-active': false
		};
		this.init();
	}

	ngOnInit()
	{
		this.handleResize();
	}

	public onScroll()
	{
		this.page['fixed-header'] = (this.getScrollTop() >= (this.page['browser-height'] - 51));

		this.ytContentComponent.minimizeYT();

		if (this.page['header-loaded'] && this.page['full-header'])
		{
			this.headerComponent.closeMenu();
		}
	}

	private init()
	{
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
			this.page['loading'] = false;
		});
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
					this.headerComponent.closeMenu();
				}
			}
		}
		if (this.bnb.nativeElement.offsetParent.clientHeight !== this.page['browser-height'])
		{
			this.page['browser-height'] = this.bnb.nativeElement.offsetParent.clientHeight;
		}
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

}
