import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ContactComponent } from './components/contact/contact.component';
import { FbpostsComponent } from './components/fbposts/fbposts.component';
import { GuidelinesComponent } from './components/guidelines/guidelines.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { PrivacyPolicyComponent } from './components/privacy-policy/privacy-policy.component';
import { TocComponent } from './components/toc/toc.component';
import { AuthGuard } from './guards/auth.guard';
import { AnonymusGuard } from './guards/anonymus.guard';

const routes: Routes = [
  {
    path: 'Dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'Login',
    component: LoginComponent,
    canActivate: [AnonymusGuard]
  },
  {
    path: 'Contacts',
    component: ContactComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'Posts',
    component: FbpostsComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'Tasks',
    component: TasksComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'Guidelines',
    component: GuidelinesComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'Privacy_Policy',
    component: PrivacyPolicyComponent,
  },
  {
    path: 'TermsofServices',
    component: TocComponent,
  },
  {
    path: 'Admax',
    loadChildren: './admin/admin.module#AdminModule'
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
