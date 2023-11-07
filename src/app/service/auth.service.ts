import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // baseAPI = 'https://campusconnect-json-server.onrender.com/users'
  baseAPI = 'http://localhost:3000/users'
  roleAPI = 'http://localhost:3000/role'
  // roleAPI = 'https://campusconnect-json-server.onrender.com/role'
  constructor(private http: HttpClient) { }

  //All User 
  getAll() {
    return this.http.get(this.baseAPI)
  }
  getAllRole() {
    return this.http.get(this.roleAPI)
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
  updateData(id: any, inputdata: any) {
    return this.http.put(this.baseAPI + '/' + id, inputdata)
  }

  //Get username to validate login
  isLoggedIn() {
    return sessionStorage.getItem('username') != null
  }
  isAdmin() {
    return sessionStorage.getItem('role') === 'admin'
  }
  //Get role to validate the permissons
  getUserRole() {
    return sessionStorage.getItem('role') != null ? sessionStorage.getItem('role')?.toString() : ''
  }
}
