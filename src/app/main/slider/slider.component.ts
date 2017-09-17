import { Component, ViewChild, Input, OnInit }			from '@angular/core';
import { HttpGETService }								from '../../services/http/get.service';
import { Slides }										from './slides.model';
import { sliderAnimation }								from './slider-animation';

@Component({
	selector: 'bnb-slider',
	templateUrl: './slider.html',
	styleUrls: ['./slider.less'],
	animations: [sliderAnimation]
})

export class SliderComponent implements OnInit {

	public slider: any;
	private hack: any;

	@Input() page;

	@ViewChild('wrapper') wrapper;

	constructor(private getService: HttpGETService)
	{
		this.slider = {
			'active': -1,
			'animation': '',
			'BTNsEnabled': true,
			'auto-slide': {},
			'isAutoSlideOn': false
		};
		this.hack = {
			'active': 0,
			'animation': 'active'
		};
	}

	ngOnInit()
	{
		this.getService.get('slider.json').subscribe(data => {
			this.slider.slides = (new Slides(data)).slides;
			this.setAutoSlideOn();
		});
	}

	private setAutoSlideOn(): void
	{
		if (this.slider.slides.length > 0)
		{
			this.randomizeSlide();
			this.slider.isAutoSlideOn = true;
			this.slider.active = this.hack.active;

			this.slider['auto-slide'] = setInterval(() => {
				this.changeSlide('next', this.slider.active < this.slider.slides.length - 1 ? this.slider.active + 1 : 0);
			}, 6000);
		}
	}

	private setAutoSlideOff(): void
	{
		this.slider.isAutoSlideOn = false;
		clearInterval(this.slider['auto-slide']);
	}

	private randomizeSlide(): void
	{
		this.hack.active = Math.floor((Math.random() * (this.slider.slides.length)));
		this.selectSlide(this.slider.active);
	}

	public selectSlide(index: number): void
	{
		if (this.slider.isAutoSlideOn)
		{
			this.setAutoSlideOff();
		}
		if (this.slider.active !== index)
		{
			this.changeSlide('down', index);
		}
	}

	private changeSlide(animation: string, activeIndex: number): void
	{
		if (this.slider.BTNsEnabled)
		{
			this.slider.BTNsEnabled = false; // disable button
			this.hack.active = activeIndex; // change active slide
			this.slider.animation = animation; // animate
			this.hack.animation = animation;
		}
	}

	public animationStarted(ev: any): void
	{
		// console.log(ev.fromState, '->', ev.toState, ev.totalTime + 'ms');
		if (ev.toState === 'down' || ev.toState === 'next')
		{
			// active -> 'animation' -> inactive
			this.slider.active = this.hack.active;
		}
	}

	public animationDone(ev: any): void
	{
		if (ev.fromState === 'inactive' && (ev.toState === 'down' || ev.toState === 'next'))
		{
			// inactive -> 'animation' -> active
			this.slider.animation = 'active';
		}
		if (ev.toState === 'active')
		{
			// enable slider buttons
			this.slider.BTNsEnabled = true;
		}
	}

}
