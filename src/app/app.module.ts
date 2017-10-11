import { BrowserModule }						from '@angular/platform-browser';
import { NgModule }								from '@angular/core';
import { FormsModule }							from '@angular/forms';
import { HttpModule }							from '@angular/http';

// main
import { BNBComponent }							from './bnb.component';
import { MainComponent }						from './main/main.component';
import { SliderComponent }						from './main/page/content/slider/slider.component';
import { HeaderComponent }						from './main/page/content/header/header.component';
import { FooterComponent }						from './main/page/content/footer/footer.component';

// router
import { AppRoutingModule, routedComponents }	from './app.routing';
import { VideoAlbumComponent } 					from './main/page/content/router/video-album/video-album.component';
import { PhotoAlbumComponent } 					from './main/page/content/router/photo-album/photo-album.component';

// modules
import { PopupComponent }						from './main/page/modules/popup/popup.component';
import { DropdownComponent }					from './main/page/modules/dropdown/dropdown.component';
import { LinkComponent }						from './main/page/modules/link/link.component';
import { YoutubePlayerComponent } 				from './main/page/modules/youtube-player/youtube-player.component';

// services
import { HttpService }							from './main/services/http.service';

// pipes
import { SafeUrlPipe } 							from './main/pipes/safe-url';

// npm
import { PerfectScrollbarModule } 				from 'ngx-perfect-scrollbar';
import { YoutubePlayerModule } 					from 'ng2-youtube-player';

@NgModule({
	declarations: [
		BNBComponent,
		MainComponent,
		SliderComponent,
		HeaderComponent,
		FooterComponent,
		PopupComponent,
		DropdownComponent,
		LinkComponent,
		YoutubePlayerComponent,
		routedComponents,
		VideoAlbumComponent,
		PhotoAlbumComponent,
		SafeUrlPipe
	],
	imports: [
		BrowserModule.withServerTransition({appId: 'bnb'}),
		FormsModule,
		HttpModule,
		AppRoutingModule,
		PerfectScrollbarModule.forRoot({suppressScrollX: true}),
		YoutubePlayerModule
	],
	providers: [
		HttpService
	],
	bootstrap: [
		BNBComponent
	]
})

export class AppModule
{}
