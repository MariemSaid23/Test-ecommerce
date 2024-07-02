import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../interface/product';
import { IBasket, IBasketItem } from '../interface/basket';


@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private _HttpClient:HttpClient) { }
  baseUrl:string=`http://localhost:5022/api/`
  addToCart():Observable<any>{
   return this._HttpClient.post(this.baseUrl+'Basket',{});
  }

   
  private mapProductItemToBasketItem(item: Product, quantity: number): IBasketItem {
    return {
      id: item.id,
      productName: item.name,
      price: item.price,
      pictureUrl: item.pictureUrl,
      quantity,
      brand: item.brand,
      category:item.category
    }
  }
}
