import { Component, ViewChild, HostBinding, HostListener, OnInit }	from '@angular/core';
import { Router }													from '@angular/router';
import { HttpGETService }											from '../services/http/get.service';
import { routerTransition }											from './routerFadeIn';

@Component({
	selector: 'bnb-main',
	templateUrl: './main.html',
	styleUrls: ['./main.less'],
	animations: [ routerTransition ]
})

export class MainComponent implements OnInit {

	public page: any;

	@ViewChild('bnb') bnb;

	@HostBinding('@routerTransition') routerTransition;

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
			'scrolled-px': 0,
			'scrolling': false,
			'header-loaded': false,
			'header-len': 0,
			'full-header': false
		};
		this.init();
	}

	ngOnInit()
	{
		this.handleResize();
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
		this.page['scrolling'] = true;
		let start = this.getScrollTop() + 1;
		let end	= 0;

		if (section === this.page['scroll-sections'][1])
		{
			end = this.page['browser-height'] - 50;
		}
		else if (section === this.page['scroll-sections'][2])
		{
			end = this.getScrollHeight() - this.getOffsetHeight();
		}

		let step = end;

		if (start > end)
		{
			// scroll UP
			const interval = setInterval(() => {

				step	= Math.ceil((start - end) / 12.5);
				start	= start - step;

				if (start > end)
				{
					this.setScrollTop(start);
				}
				else
				{
					this.setScrollTop(end);
					clearInterval(interval);
					this.page['scrolling'] = false;
				}
			}, 10);
		}
		else if (start < end)
		{
			// scroll DOWN
			const interval = setInterval(() => {

				step	= Math.floor(step / 1.001);
				start	= start + (end - step);

				if (start < end)
				{
					this.setScrollTop(start);
				}
				else
				{
					this.setScrollTop(end);
					clearInterval(interval);
					this.page['scrolling'] = false;
				}
			}, 10);
		}
		else
		{
			this.page['scrolling'] = false;
		}
	}

	public handleResize() {
		if (this.bnb.nativeElement.offsetParent.clientWidth !== this.page['browser-width'])
		{
			this.page['browser-width'] = this.bnb.nativeElement.offsetParent.clientWidth;
			if (this.page['header-loaded'])
			{
				this.page['full-header'] =  (this.page['browser-width'] <= ((this.page['header-len'] * 250) + 200));
			}
		}
		if (this.bnb.nativeElement.offsetParent.clientHeight !== this.page['browser-height'])
		{
			this.page['browser-height'] = this.bnb.nativeElement.offsetParent.clientHeight;
		}
	}

	public onScroll(): void
	{
		this.getScrollTop();
		this.page['fixed-header'] = (this.getScrollTop() >= (this.page['browser-height'] - 51));
	}

	private getScrollTop(): number
	{
		this.page['scrolled-px'] = this.bnb.nativeElement.scrollTop;
		return this.page['scrolled-px'];
	}

	private setScrollTop(size: number): void
	{
		this.bnb.nativeElement.scrollTop = size;
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
