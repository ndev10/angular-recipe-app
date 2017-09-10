import { AutheService } from './../auth/auth.service';
import { Recipe } from './../recipes/recipe-model';
import { RecipeService } from './../recipes/recipe.service';
import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import  "rxjs/Rx";
@Injectable()
export class DataStrorageService {

    constructor(private http : Http,private recipeService:RecipeService,
                private authService:AutheService){}

    stroeRecipes() {
        const token = this.authService.getToken();
        return this.http.put('https://angular-recipe-5aaec.firebaseio.com/recipes.json?auth='+token,this.recipeService.getRecipes());
    }

    getRecipes() {
        const token = this.authService.getToken();
        return this.http.get('https://angular-recipe-5aaec.firebaseio.com/recipes.json?auth='+token)
                        .map((response:Response) => {
                            const recipes = response.json();
                            for (const recipe of recipes) {
                                if (!recipe['ingredients']) {
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