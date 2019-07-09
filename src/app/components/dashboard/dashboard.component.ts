import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

import { DataService } from '../../services/data.service';
import { UserService } from 'src/app/services/user.service';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  showLoading = true;
  userID: string;
  user_name: string;
  count: number;
  show_leaderboard = false;
  rank: number;
  refcode: string;
  total_points: number;
  posts_shared: number;
  task_completed: number;
  tickets_sold: number;
  leaderboard: any;

  constructor(
    public dialog: MatDialog,
    private dataservice: DataService,
    private userservice: UserService,
    private _snackBar: MatSnackBar
  ) {}

  async ngOnInit() {
    this.userID = this.userservice.getUserId();
    const result = await this.dataservice.getDashboardData();
    this.hideLoader();
    if (result) {
      this.count = result.count;
      this.user_name = result.userName;
      this.rank = result.rank;
      this.total_points = result.totalPoints;
      this.refcode = result.refCode ? result.refCode : 'ReferalCode';
      this.tickets_sold = result.ticketsBooked;
      this.posts_shared = result.postsShared;
      this.task_completed = result.tasksCompleted;
      this.leaderboard = result.leaderBoard;
    }
  }

  hideLoader() {
    this.showLoading = false;
    return;
  }
  copyMessage(val: string) {
    const selBox = document.createElement('textarea');
    selBox.style.position = 'fixed';
    selBox.style.left = '0';
    selBox.style.top = '0';
    selBox.style.opacity = '0';
    selBox.value = val;
    document.body.appendChild(selBox);
    selBox.focus();
    selBox.select();
    document.execCommand('copy');
    document.body.removeChild(selBox);
    this._snackBar.open('Copied to clipboard', 'Close', {
      duration: 1500
    });
  }

  // openLbPopup() {
  //   this.openDialog(
  //     0,
  //     'Leaderboard',
  //     'The leadeerboard shows top 10 campus ambassadors'
  //   );
  // }

  openDialog(type: number, title: string, content: string) {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '500px',
      data: { type, title, content }
    });
    return dialogRef;
  }
}
