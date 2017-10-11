import { NgModule } 			from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmptyComponent }		from './main/page/router/empty/empty.component';
import { NotFoundComponent } 	from './main/page/router/not-found/not-found.component';

const routes: Routes = [
	{
		path: '',
		// component: EmptyComponent,
		redirectTo: '/video-album',
		pathMatch: 'full'
	},
	{
		path: 'video-album',
		component: EmptyComponent
	},
	{
		path: 'photo-album',
		component: EmptyComponent
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
	EmptyComponent,
	NotFoundComponent
];
