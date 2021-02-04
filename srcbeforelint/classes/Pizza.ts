export class Ingredients{
    constructor(private name: string, public price: number){
    }}
export class Pizza {
    constructor(private ingredients: Ingredients[], public name: string, public price: number){
 }
 public computeIngredientsPrice(): number {
 let price = 0;
    this.ingredients.forEach(function(i){ price += i.price});
   return price;}}