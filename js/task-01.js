const numberOfCategories = document.querySelectorAll('.item').length;
console.log('Number of categories:', numberOfCategories);

const titleNumber = document.querySelectorAll('.item');
titleNumber.forEach((element) => {
	console.log("Category:", element.firstElementChild.textContent);
	console.log("Elements: ", element.firstElementChild.nextElementSibling.children.length
	);
});