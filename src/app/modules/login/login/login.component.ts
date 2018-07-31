import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { MatDialog, MatDialogRef } from '@angular/material';
import { OverlaySpinnerComponent } from '../../../components/overlay-spinner/overlay-spinner.component';

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
  		private api: ApiService
	) {
		
	}

	ngOnInit() {
	}

	signIn() {

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

		}, error => {
			console.log(error);

			this.dialog.close();
		})
	};

}
