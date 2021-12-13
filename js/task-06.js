const validationInput = document.querySelector('#validation-input');
validationInput.addEventListener('blur', onInputBlur);

function onInputBlur () {
if (validationInput.value.length === validationInput.dataset.length) {
validationInput.classList.add('valid');
validationInput.classList.remove('invalid');
} else {
    validationInput.classList.add('invalid');
    validationInput.classList.remove('valid');
}
};
inputRef.addEventListener('blur', onInputBlur);
