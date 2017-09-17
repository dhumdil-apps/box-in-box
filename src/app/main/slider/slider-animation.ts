import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';

export const sliderAnimation = trigger('animateSlide', [
	state('down, next, active',
		style({
			visibility: 'visible'
		})
	),
	state('inactive',
		style({
			visibility: 'hidden'
		})
	),
	transition('down => inactive', [
		animate(400, keyframes([
			style({
				visibility: 'visible',
				zIndex: 50
			})
		]))
	]),
	transition('next => inactive', [
		animate(400, keyframes([
			style({
				visibility: 'visible',
				zIndex: 50
			}),
			style({
				visibility: 'visible',
				zIndex: 50,
			})
		]))
	]),
	// inactive -> active
	transition('inactive => down', [
		animate(400, keyframes([
			style({
				opacity: 0,
				visibility: 'visible',
				transform: 'translate3d(-50%, -100%, 0) scale(0, 0)',
				zIndex: 100
			}),
			style({
				opacity: 1,
				visibility: 'visible',
				transform: 'translate3d(-50%, 0, 0) scale(1, 1)',
				zIndex: 100
			})
		]))
	]),
	transition('inactive => next', [
		animate(400, keyframes([
			style({
				opacity: 0,
				transform: 'translate3d(-150%, 0, 0) scale(0, 0)',
				visibility: 'visible',
				zIndex: 100
			}),
			style({
				opacity: 1,
				transform: 'translate3d(-50%, 0, 0) scale(1, 1)',
				visibility: 'visible',
				zIndex: 100
			})
		]))
	])
]);
