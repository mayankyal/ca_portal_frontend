//Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './materialmodule';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';

//Components
import { AppComponent } from './app.component';
import { FbpostsComponent } from './components/fbposts/fbposts.component';
import { GuidelinesComponent } from './components/guidelines/guidelines.component';
import { ContactComponent } from './components/contact/contact.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { FooterComponent } from './components/footer/footer.component';
import { TasksComponent } from './components/tasks/tasks.component';


//Helpers
import { AuthInterceptor } from './helpers/auth-interceptor';


//AdminComponents
import { UserdetailsComponent } from './admin-components/userdetails/userdetails.component';
import { AdmintaskComponent } from './admin-components/admintask/admintask.component';
import { AdminnavbarComponent } from './admin-components/adminnavbar/adminnavbar.component';
import { DatatableComponent } from './admin-components/datatable/datatable.component';
import { PostComponent } from './admin-components/post/post.component';
import { PostsTableComponent } from './admin-components/posts-table/posts-table.component';

@NgModule({
  declarations: [
    AppComponent,
    FbpostsComponent,
    GuidelinesComponent,
    ContactComponent,
    NavbarComponent,
    LoginComponent,
    DashboardComponent,
    FooterComponent,
    TasksComponent,
    UserdetailsComponent,
    AdmintaskComponent,
    AdminnavbarComponent,
    DatatableComponent,
    PostComponent,
    PostsTableComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    FlexLayoutModule,
    FormsModule
  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
