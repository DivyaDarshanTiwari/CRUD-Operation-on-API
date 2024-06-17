import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Api } from './api';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  url = "https://gorest.co.in/public/v2/users"; //get this api at https://gorest.co.in/  . you can create your own key here and the yse further
  obj: Api = {
    id: 0,
    name: "dddddddddddddddddddddddddd",
    gender: "female",
    email: "dddddddddddddd@15ce.com",
    status: "active"
  };
  private token = "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"; //Put your key here 
  head_obj = new HttpHeaders().set("Authorization", `Bearer ${this.token}`);


  constructor(private http: HttpClient) { }

  getdata(): Observable<Api[]> {
    return this.http.get<Api[]>(this.url, { headers: this.head_obj });
  }

  postdata(): Observable<Api> {
    return this.http.post<Api>(this.url, this.obj, { headers: this.head_obj });
  }

  putdata(): Observable<Api>{
    let x = `${this.url}/6967279`
    return this.http.put<Api>(x,{
      id: 0,
      name: "dddddddddddddddddddddddddd",
      gender: "female",
      email: "dddddddddwrwrwrdd@15ce.com",
      status: "active"
    },{headers:this.head_obj})
  }

  deletedata(id:number):Observable<void>{
    let x = `${this.url}/${id}`
    return this.http.delete<void>(x, { headers: this.head_obj });
  }
}
