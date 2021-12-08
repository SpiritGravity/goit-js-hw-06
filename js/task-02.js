const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ingredientsListRef = document.querySelector('#ingredients'); 
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

