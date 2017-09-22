import { Popup } from '../../modules/popup/popup.model';

export class Slider {

	public loading = true;
	public activeSlide = 0;
	public slides = [];
	public w = 0;
	public h = 0;
	private isFirstTime = true;

	constructor(data: any)
	{
		try
		{
			data.forEach((slide) => {
				this.slides.push({
					'src': slide['src'],
					'title': slide['title'],
					'desc': slide['desc'],
					'w': slide['w'],
					'h': slide['h']
				});
			});
			this.w = this.slides[this.activeSlide].w;
			this.h = this.slides[this.activeSlide].h;
			this.loading = false;
		}
		catch (e)
		{
			this.activeSlide = -1;
			this.slides = [];
		}
	}
}

/*
slider.json
{
    "data": [
        {
            "src": "assets/admin/img/slider/img0.png"
        },
        {
            "src": "assets/admin/img/slider/img1.jpg"
        }
    ]
}
*/
