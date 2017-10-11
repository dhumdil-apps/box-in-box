import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class HttpService {

	constructor (private http: Http)
	{}

	public get(link: string): any
	{
		return this.http.get(link).map(res => res.json().data || {} );
	}

	public post(link: string, data: any): void
	{
		this.http.post(link, data).subscribe();
	}


}
