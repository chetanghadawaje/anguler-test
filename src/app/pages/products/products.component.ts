import { Component } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { ProductComponent } from '../../componetnts/product/product.component';
import ProdcutInterface from '../../types/product';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [ProductComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  constructor(private productService:ProductService){}

  products:ProdcutInterface[] = []
  allProducts:ProdcutInterface[] = []

  ngOnInit(){
    
    this.productService.getProducts().subscribe((data)=>{
      console.log(data);
      this.products = data
      this.allProducts = data
    })
  }

  productSerach(evenet:any){
    let value:String = evenet.target.value
    this.products = this.allProducts.filter( product => product.title?.toLowerCase().includes(value?.toLowerCase()) );
  }

}
