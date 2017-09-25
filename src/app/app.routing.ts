import { NgModule } 			from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NotFoundComponent } 	from './main/content/not-found/not-found.component';
import { YTComponent } 			from './main/content/yt/yt.component';

const routes: Routes = [
	{
		path: '',
		pathMatch: 'full',
		component: YTComponent
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
	YTComponent,
	NotFoundComponent
];
