import { Component, Inject, OnInit, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  rolelist: any;
  editdata: any;
  constructor(private builder: FormBuilder, private auth: AuthService, private dialogref: MatDialogRef<UpdateComponent>, @Inject(MAT_DIALOG_DATA) public data: any) { }
  ngOnInit(): void {
    this.auth.getAllRole().subscribe(res => {
      this.rolelist = res;
    })
    if (this.data.usercode) {

    } else {

    }
  }

  updateForm = this.builder.group({
    id: this.builder.control('', Validators.compose([Validators.required, Validators.minLength(5)])),
    name: this.builder.control('', Validators.required),
    password: this.builder.control('', Validators.compose([Validators.required, Validators.minLength(7)])),
    email: this.builder.control('', Validators.compose([Validators.required, Validators.email])),
    gender: this.builder.control('male'),
    role: this.builder.control(''),
    isActive: this.builder.control(false)
  })

  updateData() {

  }
}
