import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { Url } from 'url';

export interface DataInterface {
  postID: string;
  postURL: string;
  maxShares: number;
  expTime: Date;
}

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  postID: Url;
  postURL: Url;
  description: string;
  maxShares: number;
  expireDate: Date;

  displayedColumns = ['postID','postURL','maxShares', 'expTime'];

  postIDForm = new FormControl('', [Validators.required]);
  postURLForm = new FormControl('', [Validators.required]);
  maxSharesForm = new FormControl('', [Validators.required]);

  data: DataInterface[] = [
    { postID: 'kskn78829349sndsf',postURL: '' ,maxShares: 15 ,expTime: new Date() },
    { postID: 'kskn7sasad8829349sndsf',postURL: '' ,maxShares: 15 , expTime: new Date() },
    { postID: 'kskn788asd29349sndsf',postURL: '' ,maxShares: 15 , expTime: new Date() },
    { postID: 'kskn788asd29349sndsf',postURL: '' ,maxShares: 15 , expTime: new Date() },
    { postID: 'kskn78829349sndsf',postURL: '' ,maxShares: 15 , expTime: new Date() },
    { postID: 'ksaskn788xzc29349sndsf',postURL: '' ,maxShares: 15 , expTime: new Date() },
    { postID: 'kskn78829349sndsasf',postURL: '' ,maxShares: 15 , expTime: new Date() },
    { postID: 'kscxzckn78829349sndsf',postURL: '' ,maxShares: 15 , expTime: new Date() }
  ];
  dataSource = new MatTableDataSource<DataInterface>(this.data);
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;


  constructor() {

  }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

  }


  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
