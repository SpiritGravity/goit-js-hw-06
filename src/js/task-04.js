const decrementRef = document.querySelector('[data-action="decrement"]');
const incrementRef = document.querySelector('[data-action="increment"]');

let counterValue = 0

decrementRef.addEventListener("click", () => {
    counterValue -= 1;
    document.getElementById('value').textContent = counterValue
  });

incrementRef.addEventListener("click", () => {
    counterValue += 1;
    document.getElementById('value').textContent = counterValue
  });


