import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { JsonPipe } from '@angular/common';


@Component({
  selector: 'app-user',
  standalone: true,
  imports: [JsonPipe],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent implements OnInit{

  public getJson:any;
  public putJson: any;

  url = "https://jsonplaceholder.typicode.com/posts/1";
  constructor(private http:HttpClient) { }

  public data(){
    let token = "sdfnlsdnflwnolfnnn"
    let head_obj = new HttpHeaders().set("Authorization", `bearer ${token}`)// this is how you give authorization key in the get method
    return this.http.get(this.url,{headers:head_obj}).subscribe((data) =>{
      console.log(data)
      this.getJson =data;

    });
  }

  public putdata(){
    let token = "sdfnlsdnflwnolfnnn"
    let head_obj = new HttpHeaders().set("Authorization", `bearer ${token}`)// this is how you give authorization key in the get method
    return this.http.put('https://jsonplaceholder.typicode.com/posts/1',{
      title: 'foo',
      body: 'bar',
      userId: 1,
    },{headers:head_obj}).subscribe((data) =>{
      console.log(data)
      this.putJson =data;

    });
  }

  ngOnInit(): void {
    this.data();
    this.putdata();
  }
}
