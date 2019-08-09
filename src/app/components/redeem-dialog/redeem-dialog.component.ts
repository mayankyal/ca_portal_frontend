import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {Router} from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import { MatSnackBar } from '@angular/material';

export interface RedeemDialogData {
  message :string ,
  couponCode : string
}

@Component({
  selector: 'app-redeem-dialog',
  templateUrl: './redeem-dialog.component.html',
  styleUrls: ['./redeem-dialog.component.css']
})
export class RedeemDialogComponent implements OnInit {

  disabled : boolean = false;

  constructor(
    public dialogRef: MatDialogRef<RedeemDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public dialogData: RedeemDialogData,private router : Router,private dataservice : DataService
    ,private _snackBar : MatSnackBar) {
      dialogRef.disableClose = true;
     }

  ngOnInit() {
  }

  async redeem(){

    const redeemData = await this.dataservice.getRedeemData();
    if(redeemData.fetched){
      this.disabled = true;
      this._snackBar.open(redeemData.coupon_code, 'Close', {
        duration: 8000
      });
    }else{
      this._snackBar.open(redeemData.coupon_code, 'Close', {
        duration: 8000
      });
    }

    
  }

  onNoClick() {
    this.disabled = false;
    this.dialogRef.close();
    // this.router.navigate(['/Dashboard']);
  }

}