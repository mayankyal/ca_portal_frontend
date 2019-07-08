import { Component , ViewChild } from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';

export interface UserData {
   name: string;
   email: string;
   points: number;
   referralcode: string;
   rank:number
 }

 const users: UserData[] = [
   {name:'MAYANK KYAL' , email: 'kyalmayank@gmail.com' , points: 100 , referralcode: 'ASYG5647' , rank: 1},
   {name:'AYUSH JAIN' , email: 'kyalmayank@gmail.com' , points: 190 , referralcode: 'ASYG5647' , rank: 2},
   {name:'PRAKHAR KATIYAR' , email: 'kyalmayank@gmail.com' , points: 300 , referralcode: 'ASYG5647' , rank: 3},
   {name:'SHIVAM GOYAL' , email: 'kyalmayank@gmail.com' , points: 100 , referralcode: 'ASYG5647' , rank: 4},
   {name:'MAYANK KYAL' , email: 'kyalmayank@gmail.com' , points: 100 , referralcode: 'ASYG5647' , rank: 5},
   {name:'MAYANK KYAL' , email: 'kyalmayank@gmail.com' , points: 60 , referralcode: 'ASYG5647' , rank: 6},
   {name:'MAYANK KYAL' , email: 'kyalmayank@gmail.com' , points: 200 , referralcode: 'ASYG5647' , rank: 7},
   {name:'MAYANK KYAL' , email: 'kyalmayank@gmail.com' , points: 180 , referralcode: 'ASYG5647' , rank: 8},
   {name:'MAYANK KYAL' , email: 'kyalmayank@gmail.com' , points: 100 , referralcode: 'ASYG5647' , rank: 9},
   {name:'MAYANK KYAL' , email: 'kyalmayank@gmail.com' , points: 110, referralcode: 'ASYG5647' , rank: 10},
   {name:'MAYANK KYAL' , email: 'kyalmayank@gmail.com' , points: 100 , referralcode: 'ASYG5647' , rank: 11},
   {name:'MAYANK KYAL' , email: 'kyalmayank@gmail.com' , points: 103 , referralcode: 'ASYG5647' , rank: 12},
   {name:'MAYANK KYAL' , email: 'kyalmayank@gmail.com' , points: 100 , referralcode: 'ASYG5647' , rank: 1},
   {name:'AYUSH JAIN' , email: 'kyalmayank@gmail.com' , points: 190 , referralcode: 'ASYG5647' , rank: 2},
   {name:'PRAKHAR KATIYAR' , email: 'kyalmayank@gmail.com' , points: 300 , referralcode: 'ASYG5647' , rank: 3},
   {name:'SHIVAM GOYAL' , email: 'kyalmayank@gmail.com' , points: 100 , referralcode: 'ASYG5647' , rank: 4},
   {name:'MAYANK KYAL' , email: 'kyalmayank@gmail.com' , points: 100 , referralcode: 'ASYG5647' , rank: 5},
   {name:'MAYANK KYAL' , email: 'kyalmayank@gmail.com' , points: 60 , referralcode: 'ASYG5647' , rank: 6},
   {name:'MAYANK KYAL' , email: 'kyalmayank@gmail.com' , points: 200 , referralcode: 'ASYG5647' , rank: 7},
   {name:'MAYANK KYAL' , email: 'kyalmayank@gmail.com' , points: 180 , referralcode: 'ASYG5647' , rank: 8},
   {name:'MAYANK KYAL' , email: 'kyalmayank@gmail.com' , points: 100 , referralcode: 'ASYG5647' , rank: 9},
   {name:'MAYANK KYAL' , email: 'kyalmayank@gmail.com' , points: 110, referralcode: 'ASYG5647' , rank: 10},
   {name:'MAYANK KYAL' , email: 'kyalmayank@gmail.com' , points: 100 , referralcode: 'ASYG5647' , rank: 11},
   {name:'MAYANK KYAL' , email: 'kyalmayank@gmail.com' , points: 103 , referralcode: 'ASYG5647' , rank: 12},
   {name:'MAYANK KYAL' , email: 'kyalmayank@gmail.com' , points: 100 , referralcode: 'ASYG5647' , rank: 1},
   {name:'AYUSH JAIN' , email: 'kyalmayank@gmail.com' , points: 190 , referralcode: 'ASYG5647' , rank: 2},
   {name:'PRAKHAR KATIYAR' , email: 'kyalmayank@gmail.com' , points: 300 , referralcode: 'ASYG5647' , rank: 3},
   {name:'SHIVAM GOYAL' , email: 'kyalmayank@gmail.com' , points: 100 , referralcode: 'ASYG5647' , rank: 4},
   {name:'MAYANK KYAL' , email: 'kyalmayank@gmail.com' , points: 100 , referralcode: 'ASYG5647' , rank: 5},
   {name:'MAYANK KYAL' , email: 'kyalmayank@gmail.com' , points: 60 , referralcode: 'ASYG5647' , rank: 6},
   {name:'MAYANK KYAL' , email: 'kyalmayank@gmail.com' , points: 200 , referralcode: 'ASYG5647' , rank: 7},
   {name:'MAYANK KYAL' , email: 'kyalmayank@gmail.com' , points: 180 , referralcode: 'ASYG5647' , rank: 8},
   {name:'MAYANK KYAL' , email: 'kyalmayank@gmail.com' , points: 100 , referralcode: 'ASYG5647' , rank: 9},
   {name:'MAYANK KYAL' , email: 'kyalmayank@gmail.com' , points: 110, referralcode: 'ASYG5647' , rank: 10},
   {name:'MAYANK KYAL' , email: 'kyalmayank@gmail.com' , points: 100 , referralcode: 'ASYG5647' , rank: 11},
   {name:'MAYANK KYAL' , email: 'kyalmayank@gmail.com' , points: 103 , referralcode: 'ASYG5647' , rank: 12}
 ];

@Component({
  selector: 'app-datatable',
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.css']
})
export class DatatableComponent {


  displayedColumns = ['name', 'email', 'points', 'referralcode' , 'rank'];
  dataSource: MatTableDataSource<UserData>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor() {
    this.dataSource = new MatTableDataSource(users);
  }

  
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  

}
