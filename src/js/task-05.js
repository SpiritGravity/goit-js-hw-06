const refs = { 
inputRef: document.querySelector('#name-input'),
outputRef: document.querySelector('#name-output'),
}
function onInputChange (event) {
    if (event.currentTarget.value === '') {
        refs.outputRef.textContent = "Anonymous";
    } else {
        refs.outputRef.textContent = event.currentTarget.value;
    }
    
}
refs.inputRef.addEventListener('input', onInputChange);