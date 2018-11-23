import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Injectable} from "@angular/core";

@Injectable()
export class MyService {

  url = "https://jsonplaceholder.typicode.com/photos";

  constructor(private http: HttpClient) {
  }

  getAll() {
    return this.http.get(this.url);
  }

  get(id) {
    return this.http.get(this.url, {params: new HttpParams().set('id', id)});
  }


}
