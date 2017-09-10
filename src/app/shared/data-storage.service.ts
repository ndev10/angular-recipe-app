import { Recipe } from './../recipes/recipe-model';
import { RecipeService } from './../recipes/recipe.service';
import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import  "rxjs/Rx";
@Injectable()
export class DataStrorageService {

    constructor(private http : Http,private recipeService:RecipeService){}

    stroeRecipes() {
        return this.http.put('https://angular-recipe-5aaec.firebaseio.com/recipes.json',this.recipeService.getRecipes());
    }

    getRecipes() {
        return this.http.get('https://angular-recipe-5aaec.firebaseio.com/recipes.json',this.recipeService.getRecipes())
                        .map((response:Response) => {
                            const recipes = response.json();
                            for (const recipe of recipes) {
                                if (!recipe['ingredients']) {
                                    console.log(recipe.name);
                                    recipe['ingredients'] = [];
                                }
                            }
                            return recipes;
                        })
                        .subscribe(
                            (recipes:Recipe[]) => {
                                this.recipeService.setRecipes(recipes);
                            }
                         );
    }
}