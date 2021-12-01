const numberOfCategories = document.querySelectorAll('.item').length;
console.log('Number of categories:', numberOfCategories);

const findRef = document.querySelectorAll('.item')

console.log('Category:' , findRef[0].children[0].textContent);
console.log('Elements:' , findRef[0].children[1].childElementCount);

console.log('Category:' , findRef[1].children[0].textContent);
console.log('Elements:' , findRef[1].children[1].childElementCount);

console.log('Category:' , findRef[2].children[0].textContent);
console.log('Elements:' , findRef[2].children[1].childElementCount);
