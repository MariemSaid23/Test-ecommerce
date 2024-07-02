

export interface IBasket {

    id: string
    items: IBasketItem[]
    deliveryMethodId?: number
    shippingPrice?: number
    paymentIntentId?: string
    clientSecret?: string
}
export interface IBasketItem {
    id: number
    productName: string
    pictureUrl: string
    price: number
    quantity: number
    category: string
    brand: string
  }

  export class  Basket implements IBasket{
      id= "";
      items: IBasketItem[]=[]
      

  }