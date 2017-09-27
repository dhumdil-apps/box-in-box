import { Component, Input, Output, EventEmitter, HostListener, AfterViewInit }	from '@angular/core';
import { HttpGETService }														from '../../services/http/get.service';
import { Navigation }															from './header.model';

@Component({
	selector: 'bnb-header',
	templateUrl: './header.html',
	styleUrls: ['./header.less']
})

export class HeaderComponent implements AfterViewInit {

	public navigation: any;
	public animate: any;

	@Input() page;
	@Output() navigate = new EventEmitter();
	@Output() play = new EventEmitter();
	@Output() pause = new EventEmitter();

	@HostListener('window:resize', ['$event']) onResize()
	{
		this.closeMenu();
	}

	constructor(private getService: HttpGETService)
	{
		this.navigation = {
			'loading': true,
			'isVisible': false
		};
		this.resetAnimation();
	}

	ngAfterViewInit()
	{
		const path = this.page['langs'][this.page['langIndex']] + '/header.json';

		this.getService.get(path).subscribe(data => {
			this.navigation = new Navigation(data);
			this.page['header-loaded'] = true;
			this.page['header-len'] = this.navigation.links.length;
			this.page['full-header'] =  (this.page['browser-width'] <= ((this.navigation.links.length * 250) + 200));
			this.navigation.loading = false;
		});
	}

	public resetAnimation(): void
	{
		this.animate = {
			'catcher': '',
			'side-nav': ''
		}
	}

	public navigateTo(link: any, index: number): void
	{
		this.closeMenu();
		this.page['active-index'] = index;
		this.navigation.active = index;
		this.navigate.emit(link);
	}

	public navigateToSelected(link: any, index: number): void
	{
		this.navigation.active = index;
		link.dropdown.select(-1);
		this.navigateTo(link.id[link.dropdown.selected], index);
	}

	public toggleMenu(): void
	{
		this.navigation.isVisible ? this.closeMenu() : this.showMenu();
	}

	public closeMenu(): void
	{
		this.navigation.isVisible = false;
	}

	private showMenu(): void
	{
		this.navigation.isVisible = true;

		if (this.animate['catcher'].length === 0)
		{
			this.animate['catcher'] = 'fade-out-catcher';
			this.animate['side-nav'] = 'slide-out-nav';
		}
	}

}
