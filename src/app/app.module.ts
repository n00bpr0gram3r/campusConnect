import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
// import { CommonHeaderComponent } from './layout/common-header/common-header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { StudentsComponent } from './pages/students/students.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { NgxTypedJsModule } from 'ngx-typed-js';
import { ForgetComponent } from './pages/forget/forget.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { ToastrModule } from 'ngx-toastr';
import {ReactiveFormsModule} from '@angular/forms'
import {HttpClient, HttpClientModule} from '@angular/common/http'
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    // CommonHeaderComponent,
    FooterComponent,
    HomeComponent,
    StudentsComponent,
    AboutComponent,
    ContactUsComponent,
    ForgetComponent,
    SignUpComponent,
  ],
  imports: [
    BrowserModule,
    NgxTypedJsModule,
    AppRoutingModule,
    ToastrModule.forRoot(),
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
