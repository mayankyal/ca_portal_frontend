import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminloginComponent } from './components/adminlogin/adminlogin.component';
import { AdminnavbarComponent } from './components/adminnavbar/adminnavbar.component';
import { UsersComponent } from './components/users/users.component';
import { UserdetailsComponent } from './components/userdetails/userdetails.component';
import { PostsComponent } from './components/posts/posts.component';
import { PostdetailComponent } from './components/postdetail/postdetail.component';
import { TaskComponent } from './components/task/task.component';
import { TaskdetailsComponent } from './components/taskdetails/taskdetails.component';

const routes: Routes = [
  {
    path: 'posts',
    component: PostsComponent
  },
  {
    path: 'tasks',
    component: TaskComponent
  },
  {
    path: 'users',
    component: UsersComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
