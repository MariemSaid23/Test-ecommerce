import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private _HttpClient:HttpClient) { }
  baseUrl:string=`http://localhost:5022/api/`

  getProduct():Observable<any>{
  return this._HttpClient.get(this.baseUrl+'Products')
  }

  getBrands():Observable<any>{
    return this._HttpClient.get(this.baseUrl+'Products/brands')
    }

  getCategories():Observable<any>{
    return this._HttpClient.get(this.baseUrl+'Products/categories')
    }

    getProductsDetails(id:number|null):Observable<any>{
      return this._HttpClient.get(this.baseUrl+`Products/${id}`)
      }

      addProduct(formData:any){
        // Handle The api
        return this._HttpClient.get(this.baseUrl+`Add`)
      }
      
      editProductPhoto(formData:any){
        // Handle The api
        return this._HttpClient.get(this.baseUrl+`edit`)
      }

      editProduct(formData:any){
        // Handle The api
        return this._HttpClient.get(this.baseUrl+`edit`)
      }
}
