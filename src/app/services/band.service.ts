import { Injectable } from '@angular/core';
import { Http, Response, Jsonp } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class BandService {

	url = 'https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro=&explaintext=&titles=The%20Beatles&callback=JSONP_CALLBACK';

  constructor(
  	private _http: Http, 
  	private _jsonp: Jsonp
  ) {
  	console.log('instanciado band service');
  }

  getBand() {
    return this._jsonp.get(this.url)
        .map(res => res.json())
  }

}
