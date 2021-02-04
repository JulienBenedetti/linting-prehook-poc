export class Ingredients{
    constructor(public name: string, public price: number){
    }}
export class Pizza {
    constructor(private ingredients: Ingredients[], public name: string, public price: number){
 }
 public computeIngredientsPrice(): number {
 let price = 0;
    this.ingredients.forEach((i)=> { price += i.price});
   return price;}}