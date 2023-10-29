import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent {
  userData: any;
  constructor(private builder: FormBuilder, private auth: AuthService, private route: Router, private toastr: ToastrService) {
    sessionStorage.clear();
   }

  loginForm = this.builder.group({
    username: this.builder.control('',Validators.required),
    password: this.builder.control('',Validators.required)
  })

  login() {
    if (this.loginForm.valid) {
      this.auth.getById(this.loginForm.value.username).subscribe(res => {
        this.userData = res;
        // console.log(this.userData)
        if (this.userData.password === this.loginForm.value.password) {
          if (this.userData.isActive) {
            sessionStorage.setItem('username', this.userData.id),
              sessionStorage.setItem('role', this.userData.role),
              this.route.navigate([''])
          }
          else{
            this.toastr.error('Please Contact Admin For Approval')
          }
        }
        else{
          this.toastr.error('Invalid Credentials')
        }
      })
    } else {
      this.toastr.warning("Please Enter Valid Data")
    }
  }
}
