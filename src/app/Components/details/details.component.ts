import { Product } from 'src/app/core/interface/product';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/core/services/product.service';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit{
constructor(private _ActivatedRoute:ActivatedRoute,private _ProductService:ProductService) {}
ProductId:any;
productDetails:any=null;
ngOnInit(): void {
  this._ActivatedRoute.paramMap.subscribe({
   next:(parms)=>{
    this.ProductId=parms.get('id');
    console.log(this.ProductId);
   }
  });
this._ProductService.getProductsDetails(this.ProductId).subscribe({
  next:(response)=>{
    console.log(response);
  this.productDetails=response;
  }
})

}
}
