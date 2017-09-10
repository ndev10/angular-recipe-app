import { Subject } from 'rxjs/Subject';
import { ShoppingListService } from './../shopping-list/shopping-list.service';
import { Ingredient } from './../shared/ingredient.model';
import {Injectable } from '@angular/core';
import {Recipe} from './recipe-model';

@Injectable()
export class RecipeService {
    rcipesChanged = new Subject<Recipe[]>();
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

    setRecipes(recipes:Recipe[]) {
        this.recipes = recipes;
        this.rcipesChanged.next(this.recipes.slice())
    }
    getRecipes() {
        return this.recipes.slice();
    }

    getRecipe(index:number) {
        return this.recipes[index];
    }

    addIngredientsToShoppingList(ingredients : Ingredient[]) {
        this.slService.addIngredientsToShoppingList(ingredients);
    }
    
    addRecipe(recipe:Recipe) {
        this.recipes.push(recipe);
        this.rcipesChanged.next(this.recipes.slice())
    }

    updateRecipe(index:number,newRecipe:Recipe) {
        this.recipes[index] = newRecipe;
        this.rcipesChanged.next(this.recipes.slice())
    }

    deleteRecipe(index:number) {
  
        this.recipes.splice(index,1);
        this.rcipesChanged.next(this.recipes.slice());
    }
    
}