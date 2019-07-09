import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  showLoading = true;

  tasks: any;
  count: number;

  constructor(private dataservice: DataService) { }

  async ngOnInit() {
    const response = await this.dataservice.getTaskData();
    this.hideLoader();
    if (response) {
      this.count = response.count;
      this.tasks = response.tasks;
    }
  }

  getDate(dateString: string) {
    const dt = new Date(Date.parse(dateString));
    return dt.toDateString();
  }

  hideLoader() {
    this.showLoading = false;
    return;
  }

}
