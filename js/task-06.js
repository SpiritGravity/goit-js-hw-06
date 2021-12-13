const validationInput = document.getElementById('validation-input');
validationInput.addEventListener('blur', onInputBlur);

function onInputBlur () {
if (Number(validationInput.value.length) === Number(validationInput.dataset.length)) {
validationInput.classList.add('valid');
validationInput.classList.remove('invalid');
} else {
    validationInput.classList.add('invalid');
    validationInput.classList.remove('valid');
}
};
validationInput.addEventListener('blur', onInputBlur);



