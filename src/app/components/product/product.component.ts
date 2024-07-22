import { Component, Input, } from '@angular/core';
import {Product} from './../../models/product.model'

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  
  @Input() product!: Product;
  ngOnInit(): void {
    if (this.product && this.product.images) {
      this.product.images = this.product.images.map((image: string) => this.cleanImageUrl(image));
    }
  }

  cleanImageUrl(url: string): string {
    return url.replace(/[\[\]\\"]/g, '');
  }
}


