import { Response } from '@angular/http';
import { DataStrorageService } from './../shared/data-storage.service';
import {Component} from '@angular/core';

@Component({
    selector : 'app-header',
    templateUrl : './header.component.html'
})
export class HeaderComponent {

    constructor(private dataStorageService:DataStrorageService){}
   
    onSave() {
        this.dataStorageService.stroeRecipes().subscribe(
            (response:Response) => {
                console.log(response);
            }
        );
    }
    onFetch() {
        const temp = this.dataStorageService.getRecipes();
        console.log(temp);
    }
}