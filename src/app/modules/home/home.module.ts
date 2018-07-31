import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HttpModule } from '@angular/http';
import { MatCardModule }    from '@angular/material';
import { MatIconModule }    from '@angular/material';
import { MatGridListModule }    from '@angular/material';
import { SharedModule } from '../../shared.module';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';

// Swiper 
// https://www.npmjs.com/package/ngx-swiper-wrapper

	import { SwiperModule } from 'ngx-swiper-wrapper';
	import { SWIPER_CONFIG } from 'ngx-swiper-wrapper';
	import { SwiperConfigInterface } from 'ngx-swiper-wrapper';

const DEFAULT_SWIPER_CONFIG: SwiperConfigInterface = {
	direction: 'horizontal',
	slidesPerView: 'auto'
};

@NgModule({
	imports: [
		CommonModule,
		HomeRoutingModule,
		SharedModule,
		HttpModule,
		MatCardModule,
		MatIconModule,
		MatGridListModule,
		SwiperModule
	],
	declarations: [
		HomeComponent
	],
	providers: [
		{
			provide: SWIPER_CONFIG,
			useValue: DEFAULT_SWIPER_CONFIG
		}
	]
})
export class HomeModule {}
