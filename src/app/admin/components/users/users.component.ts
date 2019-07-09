import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor(private http: HttpClient) { }

  async ngOnInit() {
    const httpRes = await this.http
    .get<any>(
      'http://localhost:5200/' + 'data/datasum',
      { observe: 'response' }
    )
    .toPromise();
    console.log(httpRes);
  }

}
