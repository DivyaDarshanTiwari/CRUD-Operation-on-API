import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { JsonPipe } from '@angular/common';
import { UserDataService } from '../../user-data.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-delete',
  standalone: true,
  imports: [JsonPipe,NgFor],
  templateUrl: './delete.component.html',
  styleUrl: './delete.component.css'
})
export class DeleteComponent {
  
  public getJson:any;
  public deleteJson: any;

  constructor(private http:UserDataService) { }

  public data(){
    return this.http.getdata().subscribe((data) =>{ 
      console.log(data)
      this.getJson =data;
    });
  }

  public delete(id:number){
    return this.http.deletedata(id).subscribe((data) =>{
      console.log(data)
      this.deleteJson =data;

    });
  }

  ngOnInit(): void {
    this.data();
  }
}
