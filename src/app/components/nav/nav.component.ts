import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-components-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent {
    
    currentLanguage = 'en';

  	isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      	map(result => result.matches)
    );
    
  	constructor(

  		private breakpointObserver: BreakpointObserver,
  		private translate: TranslateService

	) {

  	}

  	changeLanguage( lang: string ) {

      // this.drawer.toggle();
  		this.translate.use( lang );
  	}
  
}
