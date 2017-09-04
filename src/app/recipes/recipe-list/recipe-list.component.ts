import {Component,EventEmitter,Output} from '@angular/core';
import {Recipe} from '../recipe-model'

@Component({
    selector:'app-recipe-list',
    templateUrl:'./recipe-list.component.html'
})
export class RecipeList {
    recipes : Recipe[] = [
        new Recipe("A Test Recipe","This is test",
                    "https://cdn.pixabay.com/photo/2014/11/05/15/57/salmon-518032_960_720.jpg"),
         new Recipe("Greek Food","This is test",
         "http://www.greekboston.com/wp-content/uploads/2016/08/Greek-Food.jpg")
    
        
    ];
    @Output() recipeWasSelected = new EventEmitter<Recipe>();
    onRecipeSelected(recipe) {
        this.recipeWasSelected.emit(recipe);
    }

}