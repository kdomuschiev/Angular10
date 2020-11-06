
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from './../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('Recipe 1', 'Description 1', 'https://www.acouplecooks.com/wp-content/uploads/2019/11/Recipes-Header-1.jpg'),
    new Recipe('Recipe 2', 'Description 2', 'https://www.acouplecooks.com/wp-content/uploads/2019/11/Recipes-Header-1.jpg'),
    new Recipe('Recipe 3', 'Description 3', 'https://www.acouplecooks.com/wp-content/uploads/2019/11/Recipes-Header-1.jpg'),
    new Recipe('Recipe 4', 'Description 4', 'https://www.acouplecooks.com/wp-content/uploads/2019/11/Recipes-Header-1.jpg'),
    new Recipe('Recipe 5', 'Description 5', 'https://www.acouplecooks.com/wp-content/uploads/2019/11/Recipes-Header-1.jpg'),
  ];

  constructor() {
  }

  ngOnInit(): void {}

  // tslint:disable-next-line: typedef
  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
    console.log('recipeWasSelected.emit(recipe) was called!');
  }
}
