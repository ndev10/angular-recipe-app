import { Component, OnInit,ElementRef,ViewChild,Output,EventEmitter } from '@angular/core';
import {Ingredient} from '../../shared/ingredient.model';
@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild("nameInput") nameInputRef: ElementRef;
  @ViewChild("nameAmount") nameAmountRef:ElementRef;
  @Output() ingredientAdded = new EventEmitter<Ingredient>();
  constructor() { }

  ngOnInit() {
  }

  onAddIngredeint() {
    const name = this.nameInputRef.nativeElement.value;
    const amount = this.nameAmountRef.nativeElement.value;
    this.ingredientAdded.emit(new Ingredient(name,amount));
  }

}
