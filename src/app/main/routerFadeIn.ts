import { trigger, state, animate, style, transition } from '@angular/animations';

export const routerTransition =  trigger('routerTransition', [
	state('void', style({  })),
	state('*', style({  })),

	transition(':enter', [
			style({opacity: 0, transform: 'translate3d(0, 100%, 0)'}),
		animate('1s ease',
			style({opacity: 1, transform: 'none'})) ])
]);
