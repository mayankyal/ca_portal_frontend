import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { DataService } from '../../services/data.service';
import { DialogComponent } from '../dialog/dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SELECT_PANEL_INDENT_PADDING_X } from '@angular/material';

@Component({
  selector: 'app-fbposts',
  templateUrl: './fbposts.component.html',
  styleUrls: ['./fbposts.component.css']
})
export class FbpostsComponent implements OnInit {
  showLoading = true;

  count: number;
  posts: any;

  constructor(
    public dialog: MatDialog,
    private user: UserService,
    private dataservice: DataService,
    private _snackBar: MatSnackBar
  ) {}

  async ngOnInit() {
    const result = await this.dataservice.getPostData();
    const res = await this.user.isLoggedin();
    console.log(res);
    if (res !== true) {
      this.openDialog(
        -1,
        'Error: ' + 'Not connected with Facebook',
        // tslint:disable-next-line: max-line-length
        'You probabily logged out from facebook settings or the access token may have expired, You will be now automatically logged out and is required to login again'
      );
      this.user.logout();
      return;
    }
    this.hideLoader();
    if (result) {
      this.count = result.count;
      this.posts = result.posts;
    }
  }

  share(i: number) {
    FB.ui(
      {
        method: 'share',
        href: this.posts[i].postURL
      },
      response => {
        this.givePT(response, i);
      }
    );
  }

  async givePT(response, index) {
    console.log(response);
    if (response.error_code) {
      this.openDialog(
        -1,
        'Error: ' + String(response.error_code),
        String(response.error_message)
      );
      return;
    }
    const dialogref = this.openDialog(
      4,
      'Please Wait!',
      'Varifying and Updating data'
    );
    const postId = this.posts[index].postID;
    const res = await this.dataservice.sendPostGain(btoa(postId));
    if (res) {
      if (this.posts[index].shares < this.posts[index].maxShare) {
        this.posts[index].shares += 1;
      }
      await dialogref.close();
      this._snackBar.open('Nice, Post is shared successfully!', 'Close', {
        duration: 1300
      });
      // this.openDialog(1, 'Success, Post is shared Successfully', '');
    } else {
      this.openDialog(-1, 'Error: 4004', 'Couldn\'t connect to database');
    }
  }

  hideLoader() {
    this.showLoading = false;
    return;
  }

  openDialog(type: number, title: string, content: string) {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '500px',
      data: { type, title, content }
    });
    return dialogRef;
  }
}

declare var FB: any;
