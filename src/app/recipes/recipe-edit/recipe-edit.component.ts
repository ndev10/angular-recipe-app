import { Recipe } from '../recipe-model';
import { RecipeService } from './../recipe.service';
import { FormArray, FormControl, FormGroup,Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
  id:number;
  editMode:boolean;
  recipieForm:FormGroup;
  recipeIngredeints = new FormArray([]);


  constructor(private route:ActivatedRoute,
              private recipeService:RecipeService,
              private router:Router) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params:Params) => {
        this.id = +params["id"]
        this.editMode = params["id"] != null;
        this.initForm();
      }
    );
  }

  initForm() {
    let recipeName = '';
    let recipeImagePath='';
    let recipeDescription ='';

    if (this.editMode) {
      let recipe = this.recipeService.getRecipe(this.id);
      recipeName = recipe.name;
      recipeImagePath = recipe.imagePath;
      recipeDescription = recipe.description;

      if (recipe['ingredients']) {
        for (let ingredient of recipe.ingredients) {
          this.recipeIngredeints.push(new FormGroup({
            'name':new FormControl(ingredient.name,Validators.required),
            'amount':new FormControl(ingredient.amount,
             [Validators.required,Validators.pattern(/^[1-9]+[0,9]*$/)])
          }));
        }
      }
    }

      this.recipieForm = new FormGroup(
        {
          'name':new FormControl(recipeName,Validators.required),
          'imagePath':new FormControl(recipeImagePath,Validators.required),
          'description': new FormControl(recipeDescription,Validators.required),
          'ingredients':this.recipeIngredeints
        }
      );
    
  }

  onAddIngredient() {
   (<FormArray>this.recipieForm.get("ingredients")).push(new FormGroup({
     'name':new FormControl(),
     'amount':new FormControl(),
   }));
  }
  onSubmitRecipe() {
    const newRecipe = new Recipe(this.recipieForm.value['name'],
                                 this.recipieForm.value['description'],
                                 this.recipieForm.value['imagePath'],
                                this.recipieForm.value['ingredients']);
    if(this.editMode) {
        this.recipeService.updateRecipe(this.id,newRecipe);
    } else {
        this.recipeService.addRecipe(newRecipe);
    }
    this.navigateToItemList();
  }

  navigateToItemList() {
    this.router.navigate(["../"],{relativeTo:this.route})
  }

  onDeleteIngredient(index:number) {
    (<FormArray> this.recipieForm.get('ingredients')).removeAt(index);
  }

}
