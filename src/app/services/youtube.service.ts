import { Http, Response} from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

const BASE_URL = 'https://www.googleapis.com/youtube/v3/';
const API_TOKEN = 'AIzaSyA1w7htT8MRlJFfzRJmSu3qeBYVmIZR1GQ';

@Injectable()
export class YoutubeService {
  constructor(private _http: Http){}

  search(){
    return this._http.get(`${BASE_URL}videos?part=player&id=r5PLBZ2xn2Y&key=${API_TOKEN}`)   
    .map((res:Response) => res.json())
    .map(json => json.items);
  }
} 