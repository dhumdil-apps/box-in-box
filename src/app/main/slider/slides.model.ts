
export class Slides {

	public slides = [];

	constructor(data: any)
	{
		try
		{
			data.forEach((slide) => {
				this.slides.push({
					'src': slide['src'],
					'url': slide['url']
				});
			});
		}
		catch (e)
		{
			this.slides = [];
		}
	}
}

/*
slider.json
{
    "data": [
        {
            "src": "assets/admin/img/slider/img0.png",
            "url": "google.com"
        },
        {
            "src": "assets/admin/img/slider/img1.jpg",
            "url": "www.facebook.com"
        }
    ]
}
*/
