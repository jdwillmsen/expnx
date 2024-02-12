import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { Store } from '@ngrx/store';
import { productActions } from '../store/product.actions';
import { selectProducts } from '../store/product.selector';

@Component({
  selector: 'expnx-product',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss',
})
export class ProductComponent implements OnInit {
  @Input() set categoryName(name: string) {
    if (name) {
      this.store.dispatch(
        productActions.loadProductByCategory({ category: name })
      );
    } else {
      this.store.dispatch(productActions.loadProduct());
    }
  }

  products$ = this.store.select(selectProducts);

  constructor(private readonly store: Store) {}

  ngOnInit(): void {
    // this.store.dispatch(productActions.loadProduct());
    console.log('');
  }
}
