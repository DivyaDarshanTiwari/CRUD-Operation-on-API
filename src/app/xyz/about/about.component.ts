import { Component, OnInit } from '@angular/core';
import { JsonPipe } from '@angular/common';
import { UserDataService } from '../../user-data.service';
import { Api } from '../../api';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [JsonPipe],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  public getJson: Api[] = [];
  public postJson: Api | null = null;
  public id: number | null = null;

  constructor(private userDataService: UserDataService) { }

  public data() {
    this.userDataService.getdata().subscribe((data: Api[]) => {
      console.log(data);
      this.getJson = data;
    });
  }

  public post1data() {
    this.userDataService.postdata().subscribe((data: Api) => {
      console.log(data);
      this.postJson = data;
      this.id = data.id;
    });
  }

  ngOnInit(): void {
    this.data();
    this.post1data();
  }
}
