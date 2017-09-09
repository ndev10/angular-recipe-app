import { Subject } from 'rxjs/Subject';
import {EventEmitter} from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
export class ShoppingListService {
    //ingredientAdded = new EventEmitter<Ingredient[]>();
    ingredientAdded = new Subject<Ingredient[]>();
    startEditing = new Subject<number>();

    private ingredients: Ingredient[] = [
        new Ingredient('Apples', 5),
        new Ingredient('Tomatoes', 10),
      ];

    getIngredient(id:number) {
        return this.ingredients[id];
    }
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

    updateIngredient(id:number,ingredient: Ingredient) {
        this.ingredients[id] = ingredient;
        this.ingredientAdded.next(this.ingredients.slice());
    }

    deleteIngredient(id:number) {
        this.ingredients.splice(id,1);
        this.ingredientAdded.next(this.ingredients.slice());
    }
}