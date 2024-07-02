import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { jwtDecode } from 'jwt-decode';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userInfo:any;
  baseUrl:string=`http://localhost:5022/api/Account/`;

  constructor(private _HttpClient:HttpClient) {  }
  register(userData:object):Observable<any>{
    return this._HttpClient.post(this.baseUrl+'register',userData);
  }

  login(userData:object):Observable<any>{
    return this._HttpClient.post(this.baseUrl+'login',userData);
  }


  decodeUser():void{
    const encode=localStorage.getItem('etoken');
    if(encode!==null){
     const decode=jwtDecode(encode);
     console.log(decode);
    }
  }

}
