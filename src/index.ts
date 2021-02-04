import {Ingredients, Pizza } from '../src/classes/Pizza';

/* 
line-around-comment */

const pouettos = [`hoho`,`haha`]
const pepperoni = new Ingredients(`peperroni`, 10);
const cheese = new Ingredients(`cheese`, 4);
const ingredients: Array<Ingredients> = [pepperoni, cheese]
;const  pizza = new Pizza(ingredients, `Cheese and Pepperoni`, 15);
const printPizza = function(pizza){
    console.log(`pizza production cost: `+pizza.computeIngredientsPrice());
    console.log(`piza true cost: `+pizza.price);
}
printPizza(pizza);
const url = `https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/consistent-type-imports.md`;
const pizzaName = pizza
.name.
split(` `)
if (pizzaName) {pizzaName.forEach((i) => {console.log(i)});} else { console.log(`no pizza name`); console.log(`anything else?`);}