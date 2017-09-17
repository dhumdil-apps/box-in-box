import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmptyPageComponent } from './main/content/empty-page/empty-page.component';
import { Page404Component } from './main/content/page-404/page-404.component';

const routes: Routes = [
	{
		path: '',
		pathMatch: 'full',
		component: EmptyPageComponent
	},
	{
		path: '**',
		component: Page404Component
	}
];

@NgModule({
	imports: [ RouterModule.forRoot( routes, { useHash: true }) ],
	exports: [ RouterModule ]
})

export class AppRoutingModule {}

export const routedComponents = [
	EmptyPageComponent,
	Page404Component
];
