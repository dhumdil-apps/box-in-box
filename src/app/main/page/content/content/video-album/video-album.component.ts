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

	@Output() play = new EventEmitter();
	@Output() pause = new EventEmitter();
	@Output() scroll = new EventEmitter();
	@Output() selectID = new EventEmitter();

	constructor()
	{
		this.album = {
			'selected': -1,
			'focused': 0,
			'isLocked': false,
		};
	}

	public getStyle(index: number): string
	{
		let style = (this.isSelected(index)) ? 'selected ' : '';

		if (this.isFocused(index))
		{
			style += 'focused';
		}
		else if (this.isFocused(index + 1))
		{
			style += 'focus-previous';
		}
		else if (this.isFocused(index - 1))
		{
			style += 'focus-next';
		}
		else if (this.isFocused(index + 2))
		{
			style += 'unfocus-previous';
		}
		else if (this.isFocused(index - 2))
		{
			style += 'unfocus-next';
		}
		return style;
	}

	public select(index: number): void
	{
		console.log('selected', index);
		this.album['selected'] = index;
		this.scroll.emit();
	}

	public focus(index: number): void
	{
		if (!this.isFocused(index))
		{
			console.log('focused', index);
			this.album['selected'] = -1;
			this.album['focused'] = index;
			this.scroll.emit();
		}
		else
		{
			this.select(index);
		}
	}

	public selectYT(index): void
	{
		this.selectID.emit(index);
	}

	public playYT(): void
	{
		this.play.emit();
	}

	public pauseYT(): void
	{
		this.pause.emit();
	}

	public isFocused(index: number): boolean
	{
		return (index === this.album['focused']);
	}

	public isSelected(index: number): boolean
	{
		return (index === this.album['selected']);
	}

	public isState(state: string, id: string): boolean
	{
		if (this.app['player'].id === id)
		{
			switch (state)
			{
				case 'unselected':
				{
					return (this.app['player'].state === 0);
				}
				case 'playing':
				{
					return (this.app['player'].state === 1);
				}
				case 'paused':
				{
					return (this.app['player'].state >= 2);
				}
				case 'loading':
				{
					return (this.app['player'].state < 0);
				}
				default: return (false);
			}
		}
		else {
			switch (state)
			{
				case 'unselected':
				{
					return (true);
				}
				default: return (false);
			}
		}
	}

	public focusAlbum(index: number, timeout = false): void
	{
		if (timeout || !this.album.isLocked)
		{
			this.album['selected'] = -1;
			this.album.isLocked = true;

			if (this.album['focused'] > index)
			{
				this.focus(this.album['focused'] - 1);

				setTimeout(() => {
					this.focusAlbum(index, true);
				}, 100);
			}
			else if (this.album['focused'] < index)
			{
				this.focus(this.album['focused'] + 1);

				setTimeout(() => {
					this.focusAlbum(index, true);
				}, 100);
			}
			else
			{
				this.album.isLocked = false;
			}
		}
	}

	public src(icon: string): string
	{
		return (this.app['path'].app + icon);
	}

}
