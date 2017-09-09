import { Subscription } from 'rxjs/Subscription';
import { NgForm } from '@angular/forms';
import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import {Ingredient} from '../../shared/ingredient.model';
import {ShoppingListService} from './../shopping-list.service';
@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit,OnDestroy {

  @ViewChild("slEditForm") slEditForm:NgForm;
  eidtItemSubscription:Subscription;
  editMode = false;
  editItemId:number;
  editItem:Ingredient;

  constructor(private slService : ShoppingListService) { }

  ngOnInit() {
    this.eidtItemSubscription = this.slService.startEditing.subscribe(
      (id:number) => {
        this.editItemId = id;
        this.editMode = true;
        this.editItem = this.slService.getIngredient(this.editItemId);
        this.slEditForm.setValue({
          'name':this.editItem.name,
          'amount':this.editItem.amount
        })
      }
    );
  }

  onSubmitIngredeint(slEditForm:NgForm) {
    const value = slEditForm.value;
    const ingredient = new Ingredient(value.name,value.amount);
    if(this.editMode) {
      this.slService.updateIngredient(this.editItemId,ingredient);
    } else {
      this.slService.addIngrdients(ingredient);
    }

    this.editMode=false;
    slEditForm.reset();
    
  }

  onClear() {
    this.editMode=false;
    this.slEditForm.reset()
  }

  onDelete() {
    this.slService.deleteIngredient(this.editItemId);
    this.editMode = false;
  }

  ngOnDestroy() {
    this.eidtItemSubscription.unsubscribe();
  }

}
