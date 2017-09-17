import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class HttpPOSTService {

	constructor (private http: Http)
	{}

	public post(link: string, data: any): void
	{
		this.http.post(link, data).subscribe();
	}

}
