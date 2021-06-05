import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { NewpageComponent } from './newpage/newpage.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { AuthGuardGuard } from './auth-guard.guard';

const routes: Routes = [
  { path: '', component: LoginpageComponent },
  { path: 'new', component: NewpageComponent, canActivate:  [AuthGuardGuard]},
  { path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})



export class AppRoutingModule {

}
