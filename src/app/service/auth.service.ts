import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  baseAPI = 'https://campus-connect-json-server.onrender.com/users'
  constructor(private http: HttpClient) { }

  //All User 
  getAll() {
    return this.http.get(this.baseAPI)
  }
  //Get User By Their ID

  getById(id: any) {
    return this.http.get(this.baseAPI + '/' + id)
  }
  //Register User Data
  registerData(inputdata: any) {
    return this.http.post(this.baseAPI, inputdata)
  }
  //Update User Data
  updateData(id:any, inputdata:any){
    return this.http.put(this.baseAPI+'/'+id,inputdata)
  }

  //Get username to validate login
  isLoggedIn(){
    return sessionStorage.getItem('username')!=null
  }

  //Get role to validate the permissons
  getUserRole(){
    return sessionStorage.getItem('role')!=null?sessionStorage.getItem('role')?.toString():''
  }
}
