import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';
import { AppModule } from './app.module';
import { BnbComponent } from './bnb.component';

@NgModule({
	imports: [
		ServerModule,
		AppModule
	],
	bootstrap: [BnbComponent]
})

export class AppServerModule { }
