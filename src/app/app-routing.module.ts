import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { StudentsComponent } from './pages/students/students.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { ForgetComponent } from 'src/app/pages/forget/forget.component';
import { SignUpComponent } from 'src/app/pages/sign-up/sign-up.component';
import { authGuard } from 'src/app/guard/auth.guard';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'students', component: StudentsComponent },
  { path: 'about', component: AboutComponent, canActivate:[authGuard]},
  { path: 'contact-us', component: ContactUsComponent, canActivate:[authGuard] },
  { path: 'forget', component: ForgetComponent },
  { path: 'sign-up', component: SignUpComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
