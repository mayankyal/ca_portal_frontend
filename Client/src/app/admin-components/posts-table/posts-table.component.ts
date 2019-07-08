import { Component, ViewChild } from "@angular/core";
import { MatPaginator, MatSort, MatTableDataSource } from "@angular/material";

export interface UserData {
  postID: string;
  expTime: Date;
}

const users: UserData[] = [
  { postID: "kskn78829349sndsf", expTime: new Date() },
  { postID: "kskn7sasad8829349sndsf", expTime: new Date() },
  { postID: "kskn788asd29349sndsf", expTime: new Date() },
  { postID: "kskn788asd29349sndsf", expTime: new Date() },
  { postID: "kskn78829349sndsf", expTime: new Date() },
  { postID: "ksaskn788xzc29349sndsf", expTime: new Date() },
  { postID: "kskn78829349sndsasf", expTime: new Date() },
  { postID: "kscxzckn78829349sndsf", expTime: new Date() }
];

@Component({
  selector: "app-posts-table",
  templateUrl: "./posts-table.component.html",
  styleUrls: ["./posts-table.component.css"]
})
export class PostsTableComponent {
  displayedColumns = ["postID", "expTime"];
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
