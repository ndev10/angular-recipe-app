import { SharedModule } from './../shared/shared.module';
import { RecipesRouteModule } from './recipes-routing.modue';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';
import { RecipeStartComponent } from './recipe-start/recipe-start.component';
import { RecipeItemComponent } from './recipe-list/recipe-item/recipe-item.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { RecipeList } from './recipe-list/recipe-list.component';
import { RecipesComponent } from './recipes.component';



@NgModule({
    // Dont allow duplicates across the modules.
    declarations:[
        RecipesComponent,
        RecipeList,
        RecipeDetailComponent,
        RecipeItemComponent,
        RecipeStartComponent,
        RecipeEditComponent
    ],
    imports:[
        ReactiveFormsModule,
        RecipesRouteModule,
        SharedModule
    ]
})
export class RecipesModule{

}