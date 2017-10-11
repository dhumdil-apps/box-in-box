import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Slider } 								  from './slider.model';

@Component({
	selector: 'bnb-slider',
	templateUrl: './slider.html',
	styleUrls: ['./slider.less']
})

export class SliderComponent {

	public loading: boolean;
	public selectedIndexes: any;

	@Input() slider;
	@Output() popup = new EventEmitter();

	constructor()
	{
		this.selectedIndexes = [];
		this.slider = new Slider();
	}

	public setAutoSlideOn(): void
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

	public openPopup(title: string, lines: any): void
	{
		this.popup.emit({'title': title, 'lines': lines});

		if (this.slider.isAutoSlideOn)
		{
			this.setAutoSlideOff();
		}
	}

}
