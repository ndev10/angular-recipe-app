import { Component, OnInit,ElementRef,ViewChild } from '@angular/core';
import {Ingredient} from '../../shared/ingredient.model';
import {ShoppingListService} from './../shopping-list.service';
@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild("nameInput") nameInputRef: ElementRef;
  @ViewChild("nameAmount") nameAmountRef:ElementRef;
  constructor(private slService : ShoppingListService) { }

  ngOnInit() {
  }

  onAddIngredeint() {
    const name = this.nameInputRef.nativeElement.value;
    const amount = this.nameAmountRef.nativeElement.value;
    this.slService.addIngrdients(new Ingredient(name,amount));
  }

}
