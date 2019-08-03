import { Component, OnInit,ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';

export interface DataInterface {
  userID: string;
  name: string;
  email: string;
  totalPoints: number;
  cashback: number;
}

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit{

  displayedColumns = ['userID','name','email','totalPoints','cashback'];
  
  data : DataInterface[] = [
    {userID:'jijij',name:'huhuhuh',email:'huhuhu',totalPoints: 10,cashback: 50},
    {userID:'jijij',name:'huhuhuh',email:'huhuhu',totalPoints: 10,cashback: 50},
    {userID:'jijij',name:'huhuhuh',email:'huhuhu',totalPoints: 10,cashback: 50},
    {userID:'jijij',name:'huhuhuh',email:'huhuhu',totalPoints: 10,cashback: 50},
    {userID:'jijij',name:'huhuhuh',email:'huhuhu',totalPoints: 10,cashback: 50}
  ];

  dataSource = new MatTableDataSource<DataInterface>(this.data);
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  
  constructor(private http: HttpClient) { }

  async ngOnInit() {
    const httpRes = await this.http
    .get<any>(
      'http://localhost:5200/' + 'data/datasum',
      { observe: 'response' }
    )
    .toPromise();
    console.log(httpRes);

    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
