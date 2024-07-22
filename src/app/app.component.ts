import { Component, inject } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { NgOptimizedImage } from '@angular/common';

import {Product} from './models/product.model'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'myNewApp';
  http = inject(HttpClient);
  products: Product[] = [];



  changeTitle(){
    this.title = 'Changed';
  }

  ngOnInit() {
    this.http.get<Product[]>(' https://api.escuelajs.co/api/v1/products')
    .subscribe((data) =>{
      this.products = data;


    });

  }
}
