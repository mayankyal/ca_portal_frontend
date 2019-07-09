import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  constructor(private user: UserService, public router: Router) { }

  ngOnInit() {

  }

  async fbLogin() {
    const result = await this.user.fbLogin();

    if (result) {
      console.log(result);
      this.router.navigate(['/Guidelines']);
    } else {
      console.log(result);
    }
      // this.user.fbLogin().then((result) => {
      //   console.log('User has been logged in');
      //   this.router.navigate(['/Guidelines']);
      // }).catch((result) => {
      //   console.log(result);
      // });
  }

}
