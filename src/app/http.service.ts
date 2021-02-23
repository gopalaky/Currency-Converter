import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  getCoinPrice(from: string , to:string) {
    return this.http.get('https://free.currconv.com/api/v7/convert?q='+from+'_'+to+'&compact=ultra&apiKey=2d668d1520288baff6fa');
  }
}
