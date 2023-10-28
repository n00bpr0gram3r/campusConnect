import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  constructor(private builder: FormBuilder, private toastr: ToastrService, private auth: AuthService, private route: Router) {

  }
  registerForm = this.builder.group({
    id: this.builder.control('',Validators.compose([Validators.required, Validators.minLength(5)])),
    name: this.builder.control('',Validators.required),
    password: this.builder.control('',Validators.compose([Validators.required,Validators.minLength(7)])),
    email: this.builder.control('',Validators.compose([Validators.required, Validators.email])),
    gender: this.builder.control('male'),
    role: this.builder.control(''),
    isActive: this.builder.control(false)
  })

  registration() {
    if (this.registerForm.valid) {
      this.auth.registerData(this.registerForm.value).subscribe((res => {
        this.toastr.success('Registration Successfull, Please contact Admin to activate your account.')
        this.route.navigate(['login'])
      }))
    } else {
      this.toastr.warning('Please Enter Valid Details.')
    }
  }
}
