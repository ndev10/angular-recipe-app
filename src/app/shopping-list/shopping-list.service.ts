import { Subject } from 'rxjs/Subject';
import {EventEmitter} from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
export class ShoppingListService {
    //ingredientAdded = new EventEmitter<Ingredient[]>();
    ingredientAdded = new Subject<Ingredient[]>();

    private ingredients: Ingredient[] = [
        new Ingredient('Apples', 5),
        new Ingredient('Tomatoes', 10),
      ];

    getIngredients() {
        return this.ingredients.slice();
    }

    addIngrdients(ingredient : Ingredient) {
        this.ingredients.push(ingredient);
       // this.ingredientAdded.emit(this.ingredients.slice());
       this.ingredientAdded.next(this.ingredients.slice());
    }
    
    addIngredientsToShoppingList(ingrdeints : Ingredient[]) {
        this.ingredients.push(...ingrdeints);
       // this.ingredientAdded.emit(this.ingredients.slice());
       this.ingredientAdded.next(this.ingredients.slice());
    }
}