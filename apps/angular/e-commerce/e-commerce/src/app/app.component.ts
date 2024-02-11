import { AsyncPipe, JsonPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import {
  getCategoriesActions,
  selectCategories,
} from '@expnx/angular/e-commerce/data-access/category';
import { Store } from '@ngrx/store';
import { MainNavComponent } from './main-nav/main-nav.component';

@Component({
  standalone: true,
  imports: [RouterModule, MainNavComponent, AsyncPipe, JsonPipe],
  selector: 'expnx-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'e-commerce';

  categories$ = this.store.select(selectCategories);

  // categories$ = inject(CategoryService).getCategories();

  constructor(private readonly store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(getCategoriesActions());
  }
}
