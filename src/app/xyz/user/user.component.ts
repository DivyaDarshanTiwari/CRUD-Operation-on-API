import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { JsonPipe, NgFor } from '@angular/common';
import { UserDataService } from '../../user-data.service';


@Component({
  selector: 'app-user',
  standalone: true,
  imports: [JsonPipe,NgFor],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent implements OnInit{

  public getJson:any;
  public putJson: any;

  constructor(private http:UserDataService) { }

  public data() {
    return this.http.getdata().subscribe((data) => {
      console.log(data);
      this.getJson = data;
    });
  }


  public putdata(){
    return this.http.putdata().subscribe((data) =>{
      console.log(data)
      this.putJson =data;
    });
  }

  ngOnInit(): void {
    this.data();
  }
}
