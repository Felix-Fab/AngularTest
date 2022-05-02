import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { products } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products = products;

  constructor(private router: Router) {}

  share() {
    window.alert('The product has been shared!');
  }

  next(){
    this.router.navigate(['/home']);  // define your component where you want to go
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/