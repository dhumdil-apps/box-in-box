import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class HttpGETService {

	constructor (private http: Http)
	{}

	public get(link: string): any
	{
		return this.http.get('assets/admin/json/' + link).map(res => res.json().data || {} );
	}

}
