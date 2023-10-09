class Recipe {
  constructor(title, ingredients, servings, instructions, id = Date.now()) {
    this._title = title
      this._ingredients = ingredients
      this._servings = servings
      this._instructions = instructions
      this._id = id
  }

  get title() {
    return this._title;
  }

  set title(t) {
    this._title = t;
  }

  get ingredients() {
    return this._ingredients;
  }

  set ingredients(ing) {
    this._ingredients = ing;
  }

  get servings() {
    return this._servings;
  }

  set servings(s) {
    this._servings = s;
  }

  get instructions() {
    return this._instructions;
  }

  set instructions(ins) {
    this._instructions = ins;
  }

  get id() {
    return this._id;
  }
}
export default Recipe;
