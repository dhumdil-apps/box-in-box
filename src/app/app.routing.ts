import { NgModule } 			from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NotFoundComponent } 	from './main/content/not-found/not-found.component';

const routes: Routes = [
	{
		path: '',
		pathMatch: 'full',
		redirectTo: '/404'
	},
	{
		path: '**',
		component: NotFoundComponent
	}
];

@NgModule({
	imports: [ RouterModule.forRoot( routes, { useHash: true }) ],
	exports: [ RouterModule ]
})

export class AppRoutingModule {}

export const routedComponents = [
	NotFoundComponent
];
