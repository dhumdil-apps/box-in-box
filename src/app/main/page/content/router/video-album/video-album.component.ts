import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
	selector: 'bnb-video-album',
	templateUrl: './video-album.html',
	styleUrls: ['./video-album.less']
})

export class VideoAlbumComponent {

	public album: any;

	@Input() app;
	@Input() videoAlbum;

	@Output() selectVideo = new EventEmitter();

	constructor()
	{
		this.album = {
			'selected': 0,
			'focused': 0,
			'isActive': false,
			'isLocked': false,
			'isHighlighted': false
		};
	}

	public selectVideoEvent(albumIndex: number, sectionIndex: number): void
	{
		this.selectVideo.emit({
			'album': albumIndex,
			'section': sectionIndex
		});
	}

	public getStyle(index: number): string
	{
		let style = (this.isActiveAlbum(index) && this.album['highlighted']) ? 'highlighted' : '';

		if (index === this.album['focused-album'])
		{
			style += ' focused';
		}
		if (index === this.album['focused-album'] - 1)
		{
			style += ' focus-previous';
		}
		if (index === this.album['focused-album'] + 1)
		{
			style += ' focus-next';
		}
		if (index === this.album['focused-album'] - 2)
		{
			style += ' unfocus-previous';
		}
		if (index === this.album['focused-album'] + 2)
		{
			style += ' unfocus-next';
		}
		return style;
	}

	public openAlbum(index: number): void
	{
		console.log('open albumIndex', index);
		this.album['selected-album'] = index;
		this.album['active'] = true;
		this.album['highlight'] = false;
	}

	public closeAlbum(): void
	{
		console.log('closing', this.album['selected-album']);
		this.album['active'] = false;
	}

	public focusAlbum(index: number): void
	{
		if (this.isActiveAlbum(index))
		{
			console.log('highlighting', index);
			this.album['highlight'] = true;
		}
		else
		{
			console.log('focusing', index);
			this.album['highlight'] = false;
			this.album['focused-album'] = index;
		}
	}

	public isActiveAlbum(index: number): boolean
	{
		return (index === this.album['focused']);
	}

	public selectAlbum(index: number, timeout = false): void
	{
		console.log('selecting', index);
		this.album['highlight'] = false;

		if (timeout || !this.album['btnsLocked']) {

			this.album['btnsLocked'] = true;

			if (this.album['focused-album'] > index)
			{
				this.album['focused-album']--;
				console.log('focusing', this.album['focused-album']);

				setTimeout(() => {
					this.selectAlbum(index, true);
				}, 100);
			}
			else if (this.album['focused-album'] < index)
			{
				this.album['focused-album']++;
				console.log('focusing', this.album['focused-album']);

				setTimeout(() => {
					this.selectAlbum(index, true);
				}, 100);
			}
			else
			{
				this.album['btnsLocked'] = false;
			}
		}
	}

	public src(icon: string): string
	{
		return (this.app['path'].app + icon);
	}

}
