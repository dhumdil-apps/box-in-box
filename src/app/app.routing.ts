import { NgModule } 			from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NotFoundComponent } 	from './main/content/not-found/not-found.component';
import { EmptyPageComponent } 	from './main/content/empty-page/empty-page.component';

const routes: Routes = [
	{
		path: '',
		pathMatch: 'full',
		component: EmptyPageComponent
	},
	{
		path: '**',
		redirectTo: ''
	}
];

@NgModule({
	imports: [ RouterModule.forRoot( routes, { useHash: true }) ],
	exports: [ RouterModule ]
})

export class AppRoutingModule {}

export const routedComponents = [
	NotFoundComponent,
	EmptyPageComponent
];
