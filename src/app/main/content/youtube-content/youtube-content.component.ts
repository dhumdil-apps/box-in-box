import { Component, Input }	from '@angular/core';

@Component({
	selector: 'bnb-youtube-content',
	templateUrl: './youtube-content.html',
	styleUrls: ['./youtube-content.less']
})

export class YTContentComponent {

	public yt: any;

	@Input() page;

	constructor()
	{
		this.yt = {
			'loading': true,
			'active-id': '', // selected video
			'active-album': -1,
			'base-href': 'https://www.youtube.com/embed/',
			'style': 'minimized', // minimized, maximized
			'albums': [
				{
					'title': '03.24.2017',
					'img': '',
					'videos': [
						{
							'title': 'Video 01',
							'img': '',
							'id': 'M7lc1UVf-VE?origin=http://example.com'
						},
						{
							'title': 'Video 02',
							'img': '',
							'id': 'M7lc1UVf-VE?origin=http://example.com'
						}
					]
				},
				{
					'title': '03.24.2017',
					'img': '',
					'videos': [
						{
							'title': 'Video 01',
							'img': '',
							'id': 'M7lc1UVf-VE?origin=http://example.com'
						},
						{
							'title': 'Video 02',
							'img': '',
							'id': 'M7lc1UVf-VE?origin=http://example.com'
						}
					]
				},
				{
					'title': '03.24.2017',
					'img': '',
					'videos': [
						{
							'title': 'Video 01',
							'img': '',
							'id': 'M7lc1UVf-VE?origin=http://example.com'
						},
						{
							'title': 'Video 02',
							'img': '',
							'id': 'M7lc1UVf-VE?origin=http://example.com'
						}
					]
				}
			]
		}
	}

	public expandAlbum(index: number): void
	{
		this.yt['active-album'] = index;
	}

	public selectVideo(id: string): void
	{
		this.yt['active-id'] = ''; // deselect
		this.maximizeYT(); // maximize

		setTimeout(() => {
			this.yt['active-id'] = id; // reselect
		}, 10);
	}

	public minimizeYT(): void
	{
		this.yt['style'] = 'minimized';
	}

	public maximizeYT(): void
	{
		this.yt['style'] = 'maximized';
	}

}
