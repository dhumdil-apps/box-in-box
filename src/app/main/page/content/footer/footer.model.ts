export class Footer
{
	public loading = true;
	public contact: any;

	constructor(data: any = {'contact': {}})
	{
		try
		{
			this.contact = data.contact;
		}
		catch (e)
		{
			this.contact = {};
		}
	}
}

/*
{
    "data": {
		"contact": {
			"data": {
				"title": "Stretnutie Rumunskych veriacich zijucich na Slovensku",
				"names": [
					{
						"icon": "name.svg",
						"name": "Janko Gaidos",
						"phone": "+ 421 123 456 789",
						"mail": "address@mail.com"
					},
					{
						"icon": "name.svg",
						"name": "Janko Gaidos",
						"phone": "+ 421 123 456 789",
						"mail": "address@mail.com"
					}
				],
				"locations": [
					{
						"icon": "location.svg",
						"address": "Tehelná 12, 915 01",
						"city": "Nové Mesto n/V",
						"country": "Slovensko"
					}
				],
				"description": {
					"title": "„Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit“",
					"read-more": "read more...",
					"lines": [
						"Nam consequat libero pulvinar, finibus tellus at, molestie sapien. Cras ac iaculis augue. Phasellus rutrum tincidunt cursus. Praesent maximus, nisi sit amet tempus aliquet, mi eros condimentum nisi, eget euismod felis lorem ut ex. Ut eu diam a tortor tincidunt pretium sed eu purus. Phasellus quis metus at sapien dictum viverra sit amet vel urna. Mauris pellentesque risus massa, ac auctor leo tempor in.",
						"Aenean hendrerit lectus elit, vel cursus nisi laoreet in. Nullam odio felis, ultrices eget dui nec, vehicula volutpat nisi. Nunc nulla massa, maximus in risus non, dapibus eleifend nunc. Sed non urna iaculis, dapibus enim eu, congue risus. Morbi porttitor orci at tincidunt iaculis. Nullam sit amet felis blandit, rhoncus nisl ut, pulvinar lacus. Quisque porttitor urna nec nunc tristique pretium. Vestibulum ligula augue, convallis et pulvinar quis, placerat vitae turpis. Nam urna eros, egestas non lorem in, aliquet hendrerit nisi. Curabitur tempor id est sed egestas. Aliquam ac tristique lectus, id luctus dui. Mauris varius dolor quis aliquet mollis. Vestibulum iaculis risus at augue ultricies, vel facilisis quam venenatis.",
						"Nullam laoreet sagittis pulvinar. Ut at pulvinar dui. In hac habitasse platea dictumst. Aliquam volutpat turpis non felis dignissim placerat. Quisque commodo laoreet turpis nec egestas. Fusce vehicula augue id tellus dignissim venenatis. Aliquam fermentum fermentum arcu et placerat. Proin quis sapien elementum, eleifend elit ac, fringilla lacus. Nulla eget ex vulputate, vulputate mi ac, blandit lacus. Ut nec dui et erat varius lacinia. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nam lacinia condimentum hendrerit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris at massa nibh. Etiam maximus, tellus id gravida facilisis, lorem sapien rhoncus turpis, et laoreet risus orci ut libero. Curabitur bibendum ultrices augue nec tristique.",
						"Nulla in sodales magna, ut imperdiet justo. Morbi eleifend nulla ac odio consequat, et euismod nisl maximus. Maecenas ut gravida massa. Ut diam lectus, tempus vitae vestibulum dapibus, faucibus vel nibh. Vivamus in consequat nulla. Proin egestas eros eget lectus semper, et finibus magna maximus. Fusce rutrum et odio at pharetra. In sollicitudin in purus at viverra. Nulla non diam tincidunt, sagittis neque vel, accumsan ipsum. Cras tempus pharetra purus at hendrerit. Quisque porta sagittis lobortis. Phasellus convallis lacus nec aliquet congue. Cras et metus sit amet odio ullamcorper tempus sit amet sed arcu. Aenean fermentum varius egestas. Fusce id diam leo. Nam vehicula posuere porta.",
						"In hac habitasse platea dictumst. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed quis ipsum accumsan massa convallis facilisis. Morbi maximus ante massa, nec faucibus tellus sodales eget. Praesent nibh nisi, ullamcorper at mattis a, consectetur nec odio. Phasellus dictum urna sed risus scelerisque viverra. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Fusce a massa vel eros fermentum vulputate. Nulla quis nibh non libero eleifend maximus.",
						"Nam feugiat eleifend facilisis. Donec sed libero eleifend, varius odio et, congue tortor. Fusce sit amet quam sit amet arcu vulputate bibendum. Nullam sit amet hendrerit turpis, ac facilisis odio. Aenean sed nisi id nisl laoreet consectetur id ac enim. Vestibulum hendrerit felis sagittis, bibendum urna quis, luctus eros. Praesent erat ipsum, posuere id pretium at, ultricies sit amet sem. Donec in nisi feugiat, pharetra enim eu, gravida lectus. Pellentesque egestas rhoncus nisl, eget tincidunt leo euismod eu. Donec leo erat, finibus hendrerit massa eget, porttitor varius neque."
					]
				}
			}
		}
	}
}
 */
