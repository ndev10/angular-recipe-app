import { Subscription } from 'rxjs/Subscription';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit, OnDestroy } from '@angular/core';
import {Recipe} from '../recipe-model';
import {RecipeService} from './../recipe.service';

@Component({
    selector:'app-recipe-list',
    templateUrl:'./recipe-list.component.html'
})
export class RecipeList implements OnInit,OnDestroy{
    recipes : Recipe[];
    recipeChangeSubscription:Subscription
    constructor (private recipeService: RecipeService,
                private router:Router,
                private route:ActivatedRoute) {
       
    }

    ngOnInit() {
       this.recipeChangeSubscription = this.recipeService.rcipesChanged.subscribe(
            (recipes: Recipe[]) => {
                this.recipes= recipes;
            }
        );
        this.recipes = this.recipeService.getRecipes();
    }

    onNewRecipe() {
        //this.router.navigate(["/recipes/new"]);
        this.router.navigate(["new"],{relativeTo:this.route})
    }

    ngOnDestroy() {
        this.recipeChangeSubscription.unsubscribe();
    }


}