import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [JsonPipe],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent implements OnInit{

  public getJson:any;
  public postJson: any;

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

  public postdata(){
    let token = "sdfnlsdnflwnolfnnn"
    let head_obj = new HttpHeaders().set("Authorization", `bearer ${token}`)// this is how you give authorization key in the get method
    return this.http.post('https://jsonplaceholder.typicode.com/posts',{
      title: 'foo',
      body: 'bar',
      userId: 1,
    },{headers:head_obj}).subscribe((data) =>{
      console.log(data)
      this.postJson =data;

    });
  }

  ngOnInit(): void {
    this.data();
    this.postdata();
  }
}
