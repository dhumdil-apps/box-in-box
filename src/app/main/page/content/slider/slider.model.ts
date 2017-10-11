export class Slider
{
	public loading = true;
	public activeSlide = -1;
	public slides = [];
	public w = 0;
	public h = 0;
	public isFirstTime = true;

	constructor(data: any = [])
	{
		try
		{
			data.forEach((slide) =>
			{
				if (slide['show'])
				{
					this.slides.push({
						'img': slide['img'],
						'txt': slide['txt']
					});
				}

			});

			if (this.slides.length > 0)
			{
				this.activeSlide = 0;
				this.w = this.slides[this.activeSlide].w;
				this.h = this.slides[this.activeSlide].h;
			}
		}
		catch (e)
		{
			this.activeSlide = -1;
			this.slides = [];
		}
	}
}
