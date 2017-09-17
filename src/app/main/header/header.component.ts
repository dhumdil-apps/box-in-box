import { Component, Input, Output, EventEmitter, HostListener, AfterViewInit }	from '@angular/core';
import { HttpGETService }														from '../../services/http/get.service';
import { Navigation }															from './header.model';
import { headerAnimation }														from './header-animation';

@Component({
	selector: 'bnb-header',
	templateUrl: './header.html',
	styleUrls: ['./header.less'],
	animations: [headerAnimation]
})

export class HeaderComponent implements AfterViewInit {

	public navigation: any;
	public intervals: any;

	@Input() page;
	@Output() navigate = new EventEmitter();

	@HostListener('window:resize', ['$event']) onResize()
	{
		this.closeMenu();
	}

	constructor(private getService: HttpGETService)
	{
		this.intervals = [{}, {}];
		this.navigation = {
			'loading': true,
			'isVisible': false
		};
	}

	ngAfterViewInit()
	{
		const path = this.page['langs'][this.page['langIndex']] + '/header.json';

		this.getService.get(path).subscribe(data => {
			this.navigation = new Navigation(data);
			this.navigation.animation = 'void';
			this.page['header-loaded'] = true;
			this.page['header-len'] = this.navigation.links.length;
			this.page['full-header'] =  (this.page['browser-width'] <= ((this.navigation.links.length * 250) + 200));
			this.navigation.loading = false;
		});
	}

	public navigateTo(link: any, index: number): void
	{
		this.navigation.active = index;
		this.closeMenu();
		this.navigate.emit(link);
		this.page['active-index'] = index;
	}

	public navigateToSelected(link: any, index: number): void
	{
		this.navigation.active = index;
		this.scrollToNavigation();
		this.navigateTo(link.id[link.dropdown.selected], index);
		link.dropdown.select(-1);
	}

	public scrollToNavigation(): void
	{
		this.navigate.emit({
			'type': 'scroll',
			'id': 'content'
		});
	}

	public toggleMenu(): void
	{
		this.navigation.isVisible ? this.closeMenu() : this.showMenu();
	}

	public closeMenu(): void
	{
		if (this.page['full-header'])
		{
			this.navigation.animation = 'void';
			this.navigation.isVisible = false;
		}
		clearInterval(this.intervals[0]);
		clearInterval(this.intervals[1]);
	}

	private showMenu(): void
	{
		this.navigation.animation = 'non-void';
		this.scrollToNavigation();
		this.navigation.isVisible = true;
		this.intervals[0] = setInterval(() =>
		{
			if (!this.page['scrolling'])
			{
				const scrolledPx = this.page['scrolled-px'];
				clearInterval(this.intervals[0]);
				this.intervals[1] = setInterval(() =>
				{
					if (scrolledPx !==  this.page['scrolled-px'])
					{
						this.closeMenu();
						clearInterval(this.intervals[1]);
					}
				}, 100);

			}

		}, 100);
	}

}
