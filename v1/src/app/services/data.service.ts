import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HTTP_ERROR_NEED_LOGOUT, HTTP_DATABASE_ERROR } from '../helpers/errors';
import { UserService } from './user.service';
import {
  SERVER_DOMAIN,
  SERVER_DATACOUNT_URI,
  SERVER_DASHBOARD_URI,
  SERVER_POSTS_URI,
  SERVER_TASKS_URI,
  SERVER_POSTSHARE_URI
} from '../variables';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private http: HttpClient, private userService: UserService) {}

  updateCount(totalTasks: number, totalPosts: number) {
    localStorage.setItem('_sessionTasks', String(totalTasks));
    localStorage.setItem('_sessionPosts', String(totalPosts));
  }

  getCount() {
    const totalTasks = Number(localStorage.getItem('_sessionTasks'));
    const totalPosts = Number(localStorage.getItem('_sessionPosts'));
    return {totalTasks, totalPosts};
  }

  async getDataCount() {
    try {
      const response = await this.http
        .get<any>(SERVER_DOMAIN + SERVER_DATACOUNT_URI, { observe: 'response' })
        .toPromise();
      return response.body;
    } catch (error) {
      console.log(error);
      return;
    }
  }

  async getDashboardData() {
    try {
      const response = await this.http
        .get<any>(SERVER_DOMAIN + SERVER_DASHBOARD_URI, { observe: 'response' })
        .toPromise();
      return response.body;
    } catch (error) {
      console.log(error);
      if (error.status === HTTP_ERROR_NEED_LOGOUT) {
        this.userService.logout();
        return;
      }
    }
  }

  async getTaskData() {
    try {
      const response = await this.http
        .get<any>(SERVER_DOMAIN + SERVER_TASKS_URI, { observe: 'response' })
        .toPromise();
      return response.body;
    } catch (error) {
      console.log(error);
      if (error.status === HTTP_ERROR_NEED_LOGOUT) {
        this.userService.logout();
        return;
      }
    }
  }

  async getPostData() {
    try {
      const response = await this.http
        .get<any>(SERVER_DOMAIN + SERVER_POSTS_URI, { observe: 'response' })
        .toPromise();
      return response.body;
    } catch (error) {
      console.log(error);
      if (error.status === HTTP_ERROR_NEED_LOGOUT) {
        this.userService.logout();
        return;
      }
    }
  }

  async sendPostGain(postId: string) {
    try {
      const response = await this.http
        .post<any>(
          SERVER_DOMAIN + SERVER_POSTSHARE_URI,
          { ID: postId },
          { observe: 'response' }
        )
        .toPromise();
      return true;
    } catch (error) {
      console.log(error);
      if (error.status === HTTP_ERROR_NEED_LOGOUT) {
        this.userService.logout();
        return false;
      } else if (error.status === HTTP_DATABASE_ERROR) {
        return false;
      }
    }
  }
}
