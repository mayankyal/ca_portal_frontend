//Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './materialmodule';
import { FlexLayoutModule } from '@angular/flex-layout';

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
import { PrivacyPolicyComponent } from './components/privacy-policy/privacy-policy.component';
import { TocComponent } from './components/toc/toc.component';
import { DialogComponent } from './components/dialog/dialog.component';

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
    PrivacyPolicyComponent,
    TocComponent,
    DialogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    FlexLayoutModule
  ],
  entryComponents: [DialogComponent],
  exports: [DialogComponent],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
