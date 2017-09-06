import { ShoppingListService } from './../shopping-list/shopping-list.service';
import { Ingredient } from './../shared/ingredient.model';
import {Injectable } from '@angular/core';
import {Recipe} from './recipe-model';

@Injectable()
export class RecipeService {

    constructor(private slService: ShoppingListService){}

 

   private recipes : Recipe[] = [
        new Recipe("A Test Recipe","This is test",
                    "https://cdn.pixabay.com/photo/2014/11/05/15/57/salmon-518032_960_720.jpg",
                [new Ingredient("Meat",1),
                new Ingredient("Bit",2)]),
         new Recipe("Greek Food","This is test",
         "http://www.greekboston.com/wp-content/uploads/2016/08/Greek-Food.jpg",
         [new Ingredient("Chicken",1),
         new Ingredient("Bit",3)])
    
        
    ];

    getRecipes() {
        return this.recipes.slice();
    }

    getRecipe(index:number) {
        return this.recipes[index];
    }

    addIngredientsToShoppingList(ingredients : Ingredient[]) {
        this.slService.addIngredientsToShoppingList(ingredients);
    }

}