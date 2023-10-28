import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  baseAPI = 'https://json-server-campus-connect-4lq0vydhh-n00bpr0gram3r.vercel.app/users'
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
}
