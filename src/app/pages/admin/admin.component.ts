import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { Router } from '@angular/router';
import { UpdateComponent } from 'src/app/pages/admin/update/update.component';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})


export class AdminComponent {
  constructor(private auth: AuthService, private router: Router, private dialog:MatDialog) {
    this.getAllData();
  }




  dataSource: any;
  studentList: any;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  displayedColumns: string[] = ['id', 'name', 'role', 'email', 'gender', 'status', 'action']
  getAllData() {
    this.auth.getAll().subscribe(res => {
      this.studentList = res;
      this.dataSource = new MatTableDataSource(this.studentList);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    })
  }

  updateData(id: any) {
    // this.auth.updateData
    console.log(id)
    this.dialog.open(UpdateComponent),{
      EnterAnimationDuration:'1000ms',
      ExitAnimationDuration:'1000ms',
      // width:'50%',
      data:{
        usercode:id
      }
    }
  }
}
