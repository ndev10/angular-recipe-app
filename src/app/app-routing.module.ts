import { HomeComponent } from './core/home/home.component';
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

const appRoutes: Routes = [
    // {path:"",redirectTo:"/recipes",pathMatch:"full"},
    {path:"",component:HomeComponent},
    {path:"recipes",loadChildren:"./recipes/recipes.module#RecipesModule"},
    {path:"shopping-list",component:ShoppingListComponent, children:[
    ]}
];

@NgModule({
    imports:[RouterModule.forRoot(appRoutes,{preloadingStrategy:PreloadAllModules})],
    exports:[RouterModule]
})
export class AppRoutingModule {

}