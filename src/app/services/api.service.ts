import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient, HttpHeaders  } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
	providedIn: 'root'
})
export class ApiService {

	constructor(
		private http:HttpClient
	) {

	}

	login( loginObj ) {

		const httpOptions = {
			headers: new HttpHeaders({ 'is-this-present': 'yes' })
		};

		return this.http.post(
		'https://jsonplaceholder.typicode.com/posts',
		{
			username: loginObj.username,
			password: loginObj.password
		},
		httpOptions)
		.pipe(map(data => data));

	}
}
