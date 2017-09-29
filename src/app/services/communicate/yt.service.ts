import { Injectable } from '@angular/core';
import { Subject }    from 'rxjs/Subject';

@Injectable()
export class YTService {

	private onUpdateSelectedVideo 	= new Subject<any>();
	private onStateChanged 			= new Subject<number>();
	private onToggleAlbum 			= new Subject<number>();
	private onSelectVideo 			= new Subject<any>();
	private onCloseAlbum 			= new Subject();
	private onUpdatePath 			= new Subject<any>();
	private onOpenAlbum 			= new Subject();
	private onPause 				= new Subject();
	private onPlay 					= new Subject();

	onUpdateSelectedVideo$	= this.onUpdateSelectedVideo.asObservable();
	onStateChanged$ 		= this.onStateChanged.asObservable();
	onToggleAlbum$ 			= this.onToggleAlbum.asObservable();
	onSelectVideo$ 			= this.onSelectVideo.asObservable();
	onCloseAlbum$ 			= this.onCloseAlbum.asObservable();
	onUpdatePath$ 			= this.onUpdatePath.asObservable();
	onOpenAlbum$ 			= this.onOpenAlbum.asObservable();
	onPause$				= this.onPause.asObservable();
	onPlay$					= this.onPlay.asObservable();

	updateSelectedVideo(album: any): void {
		this.onUpdateSelectedVideo.next(album);
	}

	stateChanged(state: number): void {
		this.onStateChanged.next(state);
	}

	toggleAlbum(albumIndex: number): void {
		this.onToggleAlbum.next(albumIndex);
	}

	selectVideo(album: any): void {
		this.onSelectVideo.next(album);
	}

	closeAlbum(): void {
		this.onCloseAlbum.next();
	}

	updatePath(path): void {
		this.onUpdatePath.next(path);
	}

	openAlbum(): void {
		this.onOpenAlbum.next();
	}

	pause(): void {
		this.onPause.next();
	}

	play(): void {
		this.onPlay.next();
	}

}
