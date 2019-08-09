import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

import { DataService } from '../../services/data.service';
import { UserService } from 'src/app/services/user.service';
import { DialogComponent } from '../dialog/dialog.component';
import { RedeemDialogComponent } from '../redeem-dialog/redeem-dialog.component';

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
  user_coupons : any;
  coupons_redeemed : number;
  zero_coupons : boolean;
  showRedeem : boolean = false; 

  status : string = "SORRY";
  message : string = "NO MORE COUPONS EXIST";


  constructor(
    public dialog: MatDialog,
    private dataservice: DataService,
    private userservice: UserService,
    private _snackBar: MatSnackBar,
    private router : Router 
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
      //this.tickets_sold =12;
      this.posts_shared = result.postsShared;
      this.task_completed = result.tasksCompleted;
      this.leaderboard = result.leaderBoard;
      this.user_coupons = result.userCoupons;
    }
    this.coupons_redeemed = this.user_coupons.length;
    if(this.coupons_redeemed == 0){
      this.zero_coupons = true;
    }
    else{
      this.zero_coupons = false;
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

  // async redeem(){

  //   const redeemData = await this.dataservice.getRedeemData();
  //   this.hideLoader();
  //   if(redeemData){
  //     this.message = redeemData.message;
  //     this.coupon_code = redeemData.coupon_code;
  //   }

  //   this.openRedeemDialog(this.message,this.coupon_code);
  // }
 
  redeem(){
    if(this.tickets_sold < 5){
      this.showRedeem = false;
      this.status = "Sorry !! Not Eligible";
      this.message = "Sell 5 or more Tickets to Redeem Coupons";
    }
    else if(this.tickets_sold >=5 && this.tickets_sold<10){
      if(this.coupons_redeemed == 0){
        this.showRedeem = true;
        this.status = "!!!********!!!";
        this.message = "Click on Redeem to get 50% discount coupon";
      }
      else if(this.coupons_redeemed == 1){
        this.showRedeem = false;
        this.status = "You are not eligible";
        this.message = "Next Milestone :: Sell 10 tickets";
      }
    }  
    else if(this.tickets_sold >= 10 ){
      if(this.coupons_redeemed == 1){
        this.showRedeem = true;
        this.status = "!!!********!!!"
        this.message = "Click on Redeem to get 100% discount coupon";
      }
      else if(this.coupons_redeemed == 2){
        this.showRedeem = false;
        this.status = "You have redeemed all possible coupons";
        this.message = "No more milestones to achieve";
      }
    

    }
    this.openRedeemDialog(this.status,this.message,this.showRedeem);
  }


  openDialog(type: number, title: string, content: string) {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '500px',
      data: { type, title, content }
    });
    return dialogRef;
  }

   openRedeemDialog(status : string , message : string , showRedeem : boolean){
    const dialogRef = this.dialog.open(RedeemDialogComponent,{
      width: "400px",
      height : "200px",
      data : {status , message , showRedeem}
    });

    dialogRef.afterClosed().subscribe(() => {
      this.router.navigate(['/Dashboard']);
    });

    return dialogRef;
  }
}
