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
    console.log("sdfgh");
    this.user.isLoggedin().then((result) => {
      console.log(result);
    }).catch((result) => {
      console.log(result + "dfghj");
    });
  }

  

  fbLogin() {
      this.user.fbLogin().then((result) => {
        console.log('User has been logged in');
        this.router.navigate(['/Guidelines']);
      }).catch((result) => {
        console.log(result);
      }); 
  }

}
