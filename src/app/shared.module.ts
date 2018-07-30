import { NgModule } from '@angular/core';

import { TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
// import { CustomerComponent } from './customer.component';
// import { NewItemDirective } from './new-item.directive';
// import { OrdersPipe } from './orders.pipe';

@NgModule({
  	imports: [
  		CommonModule,
  		TranslateModule
	],
  	declarations: [
  		// CustomerComponent, 
  		// NewItemDirective, 
  		// OrdersPipe
	],
  	exports: [
  		// CustomerComponent, 
  		// NewItemDirective, 
  		// OrdersPipe,
    	CommonModule, 
    	FormsModule,
    	TranslateModule
  	]
})
export class SharedModule {}
