import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private user: UserService,
    public router: Router,
    public dialog: MatDialog
  ) {}

  ngOnInit() {}

  async fbLogin() {
    const result = await this.user.fbLogin();

    if (result > 0) {
      console.log(result);
      this.router.navigate(['/Guidelines']);
    } else {
      console.log(result);
      this.openDialog(
        -1,
        'Error: ' + String(result),
        // tslint:disable-next-line: max-line-length
        'An unexpected error has occurred, Please try again later'
      );
    }
    // this.user.fbLogin().then((result) => {
    //   console.log('User has been logged in');
    //   this.router.navigate(['/Guidelines']);
    // }).catch((result) => {
    //   console.log(result);
    // });
  }

  openDialog(type: number, title: string, content: string) {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '500px',
      data: { type, title, content }
    });
    return dialogRef;
  }
}
