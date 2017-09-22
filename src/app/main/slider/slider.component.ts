import { Component, Input } from '@angular/core';
import { HttpGETService }		from '../../services/http/get.service';
import { Slider }				from './slider.model';
import { Popup } 				from '../../modules/popup/popup.model';

@Component({
	selector: 'bnb-slider',
	templateUrl: './slider.html',
	styleUrls: ['./slider.less']
})

export class SliderComponent {

	public popup: Popup;
	public slider: any;
	public selectedIndexes = [];

	@Input() page;

	constructor(private getService: HttpGETService)
	{
		this.slider = {
			'loading': true
		};
		this.popup = new Popup();
		this.getService.get('slider.json').subscribe(data => {
			this.slider = new Slider(data);
			this.setAutoSlideOn();
		});
	}

	private setAutoSlideOn(): void
	{
		if (this.slider.slides.length > 1)
		{
			this.slider.isAutoSlideOn = true;
			let index: number;

			this.slider['auto-slide'] = setInterval(() =>
			{
				index = this.slider.activeSlide < this.slider.slides.length - 1 ? this.slider.activeSlide + 1 : 0;
				this.selectSlide(index, true);
			}, 5000);
		}
	}

	private setAutoSlideOff(): void
	{
		this.slider.isAutoSlideOn = false;
		clearInterval(this.slider['auto-slide']);
	}

	public selectSlide(index: number, autoSlide = false): void
	{
		if (this.slider.isFirstTime)
		{
			this.slider.isFirstTime = false;
		}
		if (this.selectedIndexes.length > 0)
		{
			if (this.selectedIndexes[this.selectedIndexes.length - 1] !== index)
			{
				this.selectedIndexes.push(index);
			}
		}
		else
		{
			this.selectedIndexes.push(index);
		}

		if (this.slider.isAutoSlideOn && !autoSlide)
		{
			this.setAutoSlideOff();
		}
		if (this.selectedIndexes.length === 1)
		{
			index = this.selectedIndexes[0];

			if (this.slider.activeSlide !== index)
			{
				this.slider.activeSlide = index;
			}
			const interval = setInterval(() =>
			{
				this.selectedIndexes.shift();
				if (this.selectedIndexes.length > 0)
				{
					console.log(this.selectedIndexes);
					index = this.selectedIndexes[0];

					if (this.slider.activeSlide !== index)
					{
						this.slider.activeSlide = index;
					}
				}
				else
				{
					clearInterval(interval);
				}
			}, 300);
		}
	}

	public animateIfActive(index: number): string
	{
		if (this.slider.isFirstTime)
		{
			return ((index === this.slider.activeSlide) ? 'animated' : 'hided');
		}
		return ((index === this.slider.activeSlide) ? 'animate' : 'hide');
	}

	public w(index: number): number
	{
		// if (this.slider.slides[index].w < this.page['browser-width'])
		// {
		// 	//TODO: resize
		// }
		return (this.page['browser-width']);
	}

	public h(index: number): number
	{
		// if (this.slider.slides[index].h < this.page['browser-height'] - 50)
		// {
		// 	// TODO: resize
		// }
		return (this.page['browser-height'] - 50);
	}

	public openPopup(title: string, desc: any): void
	{
		if (this.slider.isAutoSlideOn)
		{
			this.setAutoSlideOff();
		}
		this.page['popup-is-active'] = true;
		this.popup.isVisible = true;
		this.popup.title = title;
		this.popup.lines = desc;
	}

	public popupOnClose(): void
	{
		this.page['popup-is-active'] = false;
	}

}
