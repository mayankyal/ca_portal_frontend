import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent implements OnInit {

  constructor(private user: UserService, private router: Router) { }
  
  ngOnInit() {
  }

  logout() {
    this.user.logout().then(() => {
      this.router.navigate(['/Login']);
    }).catch(() => {
      console.log("Error, Can't connect to facebook")
    });
  }
  
}
