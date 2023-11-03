import { Component, Inject, OnInit, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { AdminComponent } from 'src/app/pages/admin/admin.component';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  rolelist: any;
  editdata: any;
  constructor(private toastr:ToastrService, private builder: FormBuilder, private auth: AuthService, private dialogref: MatDialogRef<UpdateComponent>, @Inject(MAT_DIALOG_DATA) public data: any) { }
  ngOnInit(): void {
    this.auth.getAllRole().subscribe(res => {
      this.rolelist = res;
    })
    if (this.data.usercode != null && this.data.usercode != '') {
      this.loadUserData(this.data.usercode)
    }
  }

  registerForm = this.builder.group({
    id: this.builder.control(''),
    name: this.builder.control(''),
    password: this.builder.control(''),
    email: this.builder.control(''),
    gender: this.builder.control(''),
    role: this.builder.control('',Validators.required),
    isActive: this.builder.control(false)
  })

  loadUserData(code: any) {
    this.auth.getById(code).subscribe(res => {
      this.editdata = res;
      this.registerForm.setValue({
        id: this.editdata.id, name: this.editdata.name,
        password: this.editdata.password, email: this.editdata.email,
        gender: this.editdata.gender, role: this.editdata.role,
        isActive: this.editdata.isActive
      });
    })
  }

  updateData() {
    this.auth.updateData(this.registerForm.value.id,this.registerForm.value).subscribe(res=>{
      this.toastr.success("Data updated successfully")
      this.dialogref.close();
    })
    
  }
}
