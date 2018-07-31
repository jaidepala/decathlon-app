import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material';
import { MatButtonModule }  from '@angular/material';
import { MatProgressSpinnerModule } from '@angular/material';
import { MatCardModule }    from '@angular/material';
		
import { SharedModule } from '../../shared.module';

import { LoginRoutingModule } from './login-routing.module';

// Components
	import { LoginComponent } from './login/login.component';

@NgModule({
  	imports: [
		CommonModule,
		LoginRoutingModule,
		SharedModule,
		FormsModule,
		ReactiveFormsModule,
		MatInputModule,
		MatCardModule,
		MatButtonModule,
		MatProgressSpinnerModule,
		HttpModule
	],
	declarations: [
		LoginComponent
	]
})
export class LoginModule { }
