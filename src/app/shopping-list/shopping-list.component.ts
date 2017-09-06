import { Subscription } from 'rxjs/Subscription';
import { Component, OnDestroy, OnInit } from '@angular/core';
import {ShoppingListService} from './shopping-list.service'

import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit,OnDestroy {
  ingredients: Ingredient[];
  ingredientAddedSubscription:Subscription;

  constructor(private slService : ShoppingListService) { }

  ngOnInit() {
    this.ingredients = this.slService.getIngredients();
    this.ingredientAddedSubscription = this.slService.ingredientAdded.subscribe(
      (ingrdeints : Ingredient[]) => {
        this.ingredients = ingrdeints;
      }
    );
  }

  ngOnDestroy() {
    console.log("Destroy ingrdient subscription");
    this.ingredientAddedSubscription.unsubscribe();
  }

}
