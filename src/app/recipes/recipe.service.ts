import {Recipe} from './recipe.model';
import {EventEmitter, Injectable} from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';
import {ShoppingListService} from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {

  recipeSelected = new EventEmitter<Recipe>()

  private recipes: Recipe[] = [
    new Recipe('Borw',
      'red soup',
      'https://womansy.com/wp-content/uploads/2015/08/borw-s-fasolju-i-jablokami-300x225.jpg',
      [
        new Ingredient('meat', 1),
        new Ingredient('potatoe', 3),
        new Ingredient('red', 1)
      ]),
    new Recipe('Borw',
      'black soup',
      'https://womansy.com/wp-content/uploads/2015/08/borw-s-fasolju-i-jablokami-300x225.jpg',
      [
        new Ingredient('meat', 1),
        new Ingredient('potatoe', 3),
        new Ingredient('black', 1)
      ]),
    new Recipe('Borw',
      'blue soup',
      'https://womansy.com/wp-content/uploads/2015/08/borw-s-fasolju-i-jablokami-300x225.jpg',
      [
        new Ingredient('meat', 1),
        new Ingredient('potatoe', 3),
        new Ingredient('blue', 1)
      ])
  ];

  constructor(private slService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }
}
