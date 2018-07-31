import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

import { SwiperComponent, SwiperDirective, SwiperConfigInterface,
  SwiperScrollbarInterface, SwiperPaginationInterface } from 'ngx-swiper-wrapper';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  // @ViewChild(SwiperComponent) componentRef?: SwiperComponent;
  // @ViewChild(SwiperDirective) directiveRef?: SwiperDirective;

	public config: SwiperConfigInterface = {
		// a11y: true,
		direction: 'horizontal',
		slidesPerView: 'auto',
		keyboard: true,
		loop: true,
		autoplay: true,
		// centeredSlides: true,
		roundLengths: true,
		effect: 'slide',
		// mousewheel: true,
		// scrollbar: false,
		navigation: true,
		pagination: true
	};

  	constructor(
  		private translate: TranslateService
	) { }

  	ngOnInit() {

  	}

}
