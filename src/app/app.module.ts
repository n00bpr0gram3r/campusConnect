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
import { ReactiveFormsModule } from '@angular/forms'
import { HttpClient, HttpClientModule } from '@angular/common/http'
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatInputModule } from "@angular/material/input"
import {MatPaginatorModule} from '@angular/material/paginator'
import {MatSortModule} from '@angular/material/sort'
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner'
import {MatTableModule} from '@angular/material/table'
import { AdminComponent } from 'src/app/pages/admin/admin.component';
import {MatButtonModule} from '@angular/material/button';
import { UpdateComponent } from './pages/admin/update/update.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatCardModule} from '@angular/material/card';
import {MatSelectModule} from '@angular/material/select';
import {MatCheckboxModule} from '@angular/material/checkbox';


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
    AdminComponent,
    UpdateComponent,
  ],
  imports: [
    BrowserModule,
    NgxTypedJsModule,
    AppRoutingModule,
    ToastrModule.forRoot(),
    ReactiveFormsModule,
    HttpClientModule,
    MatTableModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatSortModule,
    MatButtonModule,
    MatDialogModule,
    MatCardModule,
    MatSelectModule,
    MatCheckboxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
