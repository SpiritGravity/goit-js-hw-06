function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const spanColorRef = document.querySelector('.color');
const changeColorButton = document.querySelector('.change-color');

changeColorButton.addEventListener('click', onBtnChangeColorClick );

function onBtnChangeColorClick () {
  
const color = getRandomHexColor();
document.body.style.backgroundColor = color;
spanColorRef.textContent = color;
console.log(spanColorRef.textContent);
}