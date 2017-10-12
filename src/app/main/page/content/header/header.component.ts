import { Component, Input, Output, EventEmitter, HostListener }	from "@angular/core";
import { Navigation } 											from "./header.model";

@Component({
	selector: 'bnb-header',
	templateUrl: './header.html',
	styleUrls: ['./header.less']
})

export class HeaderComponent {

	public animate: any;

	@Input() app;
	@Input() navigation;
	@Output() navigate = new EventEmitter();
	@Output() playYT = new EventEmitter();
	@Output() pauseYT = new EventEmitter();
	@Output() closeYT = new EventEmitter();
	@Output() toggleYT = new EventEmitter();

	@HostListener('window:resize', ['$event']) onResize()
	{
		this.closeMenu();
	}

	constructor()
	{
		this.navigation = new Navigation();
		this.resetAnimation();
	}

	public resetAnimation(): void
	{
		this.animate = {
			'catcher': '',
			'side-nav': ''
		};
	}

	public navigateToLink(link: any, index: number): void
	{
		this.closeMenu();
		this.navigate.emit(link);
		this.navigation.active = (index >= 0) ? index : this.navigation.active;
	}

	public navigateToDropdown(link: any, index: number): void
	{
		link.dropdown.select(-1);
		this.navigateToLink(link.id[link.dropdown.selected], index);
		this.navigation.active = (index >= 0) ? index : this.navigation.active;
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

	public toggleYTEvent(): void
	{
		this.toggleYT.emit();
	}

	public playYTEvent(): void
	{
		this.playYT.emit();
	}

	public pauseYTEvent(): void
	{
		this.pauseYT.emit();
	}

	public closeYTEvent(): void
	{
		this.closeYT.emit();
	}

	public src(icon: string): string
	{
		return (this.app['path'].app + icon);
	}

}
