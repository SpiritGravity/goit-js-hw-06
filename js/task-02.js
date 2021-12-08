const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ingredientsListRef = document.createElement('ul'); 
const makeIngredientsListRef = itemRefs => {
  return ingredients.map(itemRef => {
   const ingredientsItemRef = document.createElement('li');
    ingredientsItemRef.classList.add('item');
    ingredientsItemRef.textContent = itemRef;
    return ingredientsItemRef;
})
}
const elements = makeIngredientsListRef(ingredients);

ingredientsListRef.append(...elements);
console.log(ingredientsListRef);




// const elements = [];
// for (let i = 0; i < ingredients.length; i += 1) {
//   const itemRef = ingredients[i];
//   const ingredientsItemRef = document.createElement('li');
//   ingredientsItemRef.classList.add('item');
//   ingredientsItemRef.textContent = ingredients[i];
//   elements.push(ingredientsItemRef);
// };
// ingredientsListRef.append(...elements);
// console.log(ingredientsListRef);

