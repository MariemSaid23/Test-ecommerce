
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from 'src/app/core/services/product.service';
import { Product } from 'src/app/core/interface/product';
import { CuttextPipe } from 'src/app/core/pipes/cuttext.pipe';
import { Brand } from 'src/app/core/interface/brand';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,CuttextPipe,CarouselModule,RouterLink],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{

  
  constructor(private _ProductService:ProductService) {}
//  urlphoto:string="http://localhost:5022/";
  products:Product[]=[];
  brands:Brand[]=[];
  ngOnInit(): void {
    this._ProductService.getProduct().subscribe({
      next:(response)=>{
        //console.log('products',response.data);
        this.products=response.data;
      }
    });
    this._ProductService.getBrands().subscribe({
      next:(response)=>{
         console.log('Brands',response);
        // this.brands=response.data
       
        this.brands=response;
          console.log(this.brands);
      }
    });
  }

  brandOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    autoplay:true,
    autoplaySpeed:2000,
    autoplayTimeout:1000,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true
  }

  mainOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: true,
    navSpeed: 700,
    autoplay:true,
    autoplayTimeout:2000,
    autoplaySpeed:1000,
    navText: ['', ''],
   items:1,
    nav: false
  }
}
