import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

   @Output() recipeWasSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe('Borw', 'red soup', 'https://womansy.com/wp-content/uploads/2015/08/borw-s-fasolju-i-jablokami-300x225.jpg'),
    new Recipe('Borw', 'black soup', 'https://womansy.com/wp-content/uploads/2015/08/borw-s-fasolju-i-jablokami-300x225.jpg'),
    new Recipe('Borw', 'blue soup', 'https://womansy.com/wp-content/uploads/2015/08/borw-s-fasolju-i-jablokami-300x225.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }

}
