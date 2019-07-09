import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { DataService } from 'src/app/services/data.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent implements OnInit {

  totalPosts: number;
  totalTasks: number;

  constructor(private user: UserService, private dataService: DataService) { }

  async ngOnInit() {
    if (this.user.needSessionUpdate()) {
      this.user.updateSession();
      const res = await this.dataService.getDataCount();
      if (res) {
        this.totalPosts = res.totalPosts;
        this.totalTasks = res.totalTasks;
        this.dataService.updateCount(this.totalTasks, this.totalPosts);
      }
    } else {
      const res = this.dataService.getCount();
      this.totalPosts = res.totalPosts;
      this.totalTasks = res.totalTasks;
    }
  }

  async logout() {
    await this.user.logout();
    return;
  }
}
