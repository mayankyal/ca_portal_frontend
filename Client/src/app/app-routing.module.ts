import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ContactComponent } from './components/contact/contact.component';
import { FbpostsComponent } from './components/fbposts/fbposts.component';
import { GuidelinesComponent } from './components/guidelines/guidelines.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { AuthGuard } from './guards/auth.guard';
import { AnonymusGuard } from './guards/anonymus.guard';
import { UserdetailsComponent } from './admin-components/userdetails/userdetails.component';
import { AdmintaskComponent } from './admin-components/admintask/admintask.component';
import { PostComponent } from './admin-components/post/post.component';



const routes: Routes = [
  {
    path: 'Dashboard',
    component: DashboardComponent
    //canActivate: [AuthGuard]
  },
  {
    path: 'Login',
    component: LoginComponent
    //canActivate: [AnonymusGuard]
  },
  {
    path: 'Contacts',
    component: ContactComponent
    //canActivate: [AuthGuard]
  },
  {
    path: 'Posts',
    component: FbpostsComponent
    //canActivate: [AuthGuard]
  },
  {
    path: 'Tasks',
    component: TasksComponent
    //canActivate: [AuthGuard]
  },
  {
    path: 'Guidelines',
    component: GuidelinesComponent
    //canActivate: [AuthGuard]
  },
  {
    path: 'Admin',
    component: UserdetailsComponent
  },
  
  {
    path: 'AdminTask',
    component: AdmintaskComponent
  },
  {
    path: 'AdminPost',
    component: PostComponent
  },
  {
    path: '**',
    redirectTo: '/Login',
    pathMatch: 'full'
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard, AnonymusGuard]
})
export class AppRoutingModule { }
