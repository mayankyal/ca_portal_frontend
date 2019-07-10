import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminloginComponent } from './components/adminlogin/adminlogin.component';
import { AdminnavbarComponent } from './components/adminnavbar/adminnavbar.component';
import { UsersComponent } from './components/users/users.component';
import { UserdetailsComponent } from './components/userdetails/userdetails.component';
import { PostsComponent } from './components/posts/posts.component';
import { PostdetailComponent } from './components/postdetail/postdetail.component';
import { TaskComponent } from './components/task/task.component';
import { TaskdetailsComponent } from './components/taskdetails/taskdetails.component';
import { AdminRoutingModule } from './admin-routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AdminAuthInterceptor } from './helpers/admin-auth-interceptor';
import { MaterialModule } from './materialmodule';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AdminloginComponent,
    AdminnavbarComponent,
    UsersComponent,
    UserdetailsComponent,
    PostsComponent,
    PostdetailComponent,
    TaskComponent,
    TaskdetailsComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    HttpClientModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: AdminAuthInterceptor, multi: true}]
})
export class AdminModule { }
