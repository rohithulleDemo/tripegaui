import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/general/login/login.component';

const routes: Routes = [ // {
  //   path: '', component: CreaterLayoutComponent, children: [
  //     { path: 'login', component: LoginComponent },
  //     { path: 'aboutus', component: AboutusComponent },
  //     { path: 'projectPage', component: ProjectPageComponent },
  //   ]
  // },
  // // { path: 'aboutus', component: AboutusComponent },
  // {
  //   path: '', component: HomeLayoutComponent, children: [
  //     { path: 'landingPage', component: LandingPageComponent },
  //     { path: 'master', component: LandingPageComponent },
  //   ]
  // },
  {
    path: '', component: HomeComponent
  },
  {
    path: 'login',
    component: LoginComponent,
    // loadChildren: () => LoginModule
  },
  // {
  //   path: 'projectPage',
  // // component: ProjectPageComponent, 
  // loadChildren: () => import('./modules/project-page/project-page.module').then(m => m.ProjectPageModule)
  // },
  // {
  //   path: 'masters',
  //   // component: LandingPageComponent,
  //   loadChildren: () => import('./modules/landing-page/landing-page.module').then(m => m.LandingPageModule)
  // },
  // {
  //   path: 'transactions',
  //   // component: TransactionComponent,
  //    loadChildren: () => import('./modules/transactions/transactions.module').then(m => m.TransactionsModule)
  // },
  // {
  //   path: 'reports',
  //    loadChildren: () => import('./modules/reports/reports.module').then(m => m.ReportsModule)
  // },
  // {
  //   path: 'tool-management',
  //    loadChildren: () => import('./modules/tool-management/tool-management.module').then(m => m.ToolManagementModule)
  // },
  // { path: '**', redirectTo: '/login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
