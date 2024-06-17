import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-delete',
  standalone: true,
  imports: [JsonPipe],
  templateUrl: './delete.component.html',
  styleUrl: './delete.component.css'
})
export class DeleteComponent {
  
  public getJson:any;
  public deleteJson: any;

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

  public deletedata(){
    let token = "sdfnlsdnflwnolfnnn"
    let head_obj = new HttpHeaders().set("Authorization", `bearer ${token}`)// this is how you give authorization key in the get method
    return this.http.delete(this.url,{headers:head_obj}).subscribe((data) =>{
      console.log(data)
      this.deleteJson =data;

    });
  }

  ngOnInit(): void {
    this.data();
    this.deletedata();
  }
}
