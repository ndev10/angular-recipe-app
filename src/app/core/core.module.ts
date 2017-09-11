import { AuthGuard } from './../auth/auth-guard.service';
import { AutheService } from './../auth/auth.service';
import { DataStrorageService } from './../shared/data-storage.service';
import { RecipeService } from './../recipes/recipe.service';
import { ShoppingListService } from './../shopping-list/shopping-list.service';
import { AppRoutingModule } from './../app-routing.module';
import { SharedModule } from './../shared/shared.module';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';

import { NgModule } from '@angular/core';


@NgModule({
    declarations:[
        HeaderComponent,
        HomeComponent
    ],
    imports:[
        SharedModule,
        AppRoutingModule
    ],
    exports:[
        HeaderComponent,
        AppRoutingModule
    ],
    providers: [
        ShoppingListService,
        RecipeService,
        DataStrorageService,
        AutheService,
        AuthGuard
    ],
})
export class CoreModule {

}