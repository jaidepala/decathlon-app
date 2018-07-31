import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { MatDialog, MatDialogRef } from '@angular/material';
import { MatSnackBar } from '@angular/material';
import { OverlaySpinnerComponent } from '../../../components/overlay-spinner/overlay-spinner.component';
import { Router } from '@angular/router';

import { ApiService } from '../../../services/api.service';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

	public login = {

		username: null,
		password: null,
		loading: false
	};

	public dialog: MatDialogRef<OverlaySpinnerComponent>;

  	constructor(
  		private translate: TranslateService,
  		private matDialog: MatDialog,
  		private api: ApiService,
  		private router: Router,
  		private snackBar: MatSnackBar
	) {
		
	}

	ngOnInit() {
	}

	openSnackBar(message: string, action: string) {
		this.snackBar.open(message, action, {
			duration: 2000,
		});
	}

	signIn() {

		if(!this.login.username || !this.login.password)
		{
			this.translate.get(['LOGIN']).subscribe(translation => {
				
				var msg = '';

				if( !this.login.username )
				{
					msg  = translation.LOGIN.NO_USERNAME;
				}
				else if( !this.login.password )
				{
					msg  = translation.LOGIN.NO_PASSWORD;
				}

				this.openSnackBar(msg, translation.LOGIN.DONE);
			});

			return false;
		}		

		this.dialog = this.matDialog.open(OverlaySpinnerComponent, { 
			id: 'OverlaySpinnerComponent', disableClose: true 
		});

		let seq = this.api.login({
			username: this.login.username,
			password: this.login.password
		});

		seq.subscribe( result => {

			console.log('result', result);

			this.dialog.close();

			this.router.navigate(['/home']);

		}, error => {
			console.log(error);

			this.dialog.close();
		})
	};

}
