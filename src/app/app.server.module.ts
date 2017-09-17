import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';
import { AppModule } from './app.module';
import { BnbComponent } from './bnb.component';

import { PerfectScrollbarModule } 				from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface }		from 'ngx-perfect-scrollbar';
const PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
	suppressScrollX: true
};

@NgModule({
	imports: [
		ServerModule,
		AppModule,
		PerfectScrollbarModule.forRoot(PERFECT_SCROLLBAR_CONFIG)
	],
	bootstrap: [BnbComponent]
})

export class AppServerModule { }
