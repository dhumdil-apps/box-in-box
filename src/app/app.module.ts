import { BrowserModule }						from '@angular/platform-browser';
import { NgModule }								from '@angular/core';
import { FormsModule }							from '@angular/forms';
import { HttpModule }							from '@angular/http';
import { BrowserAnimationsModule }				from '@angular/platform-browser/animations';

// main
import { BnbComponent }							from './bnb.component';
import { MainComponent }						from './main/main.component';
import { SliderComponent }						from './main/slider/slider.component';
import { HeaderComponent }						from './main/header/header.component';
import { FooterComponent }						from './main/footer/footer.component';

// modules
import { PopupComponent }						from './modules/popup/popup.component';
import { DropdownComponent }					from './modules/dropdown/dropdown.component';
import { LinkComponent }						from './modules/link/link.component';

// services
import { HttpGETService }						from './services/http/get.service';
import { HttpPOSTService }						from './services/http/post.service';
import { PerfectScrollbarModule } 				from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface }		from 'ngx-perfect-scrollbar';
const PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
	suppressScrollX: true
};

// router
import { AppRoutingModule, routedComponents }	from './app.routing';

@NgModule({
	declarations: [
		BnbComponent,
		MainComponent,
		SliderComponent,
		HeaderComponent,
		FooterComponent,
		PopupComponent,
		DropdownComponent,
		LinkComponent,
		routedComponents
	],
	imports: [
		BrowserModule.withServerTransition({appId: 'bnb'}),
		FormsModule,
		HttpModule,
		BrowserAnimationsModule,
		AppRoutingModule,
		PerfectScrollbarModule.forRoot(PERFECT_SCROLLBAR_CONFIG)
	],
	providers: [
		HttpGETService,
		HttpPOSTService
	],
	bootstrap: [
		BnbComponent
	]
})

export class AppModule {}
