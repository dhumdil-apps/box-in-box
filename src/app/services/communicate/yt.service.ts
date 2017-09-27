import { Injectable } from '@angular/core';
import { Subject }    from 'rxjs/Subject';

@Injectable()
export class YTService {

	private onStateChanged 	= new Subject<number>();
	private onSelectId 		= new Subject<string>();
	private onPause 		= new Subject();
	private onPlay 			= new Subject();

	onStateChanged$ = this.onStateChanged.asObservable();
	onSelectId$ 	= this.onSelectId.asObservable();
	onPause$		= this.onPause.asObservable();
	onPlay$			= this.onPlay.asObservable();

	stateChanged(status: number): void {
		this.onStateChanged.next(status);
	}

	selectId(id: string): void {
		this.onSelectId.next(id);
	}

	play(): void {
		this.onPlay.next();
	}

	pause(): void {
		this.onPause.next();
	}

}
