const fontSizeRef = document.querySelector('#font-size-control');
const textRef = document.querySelector('#text');

fontSizeRef.oninput = function() {
    textRef.style.fontSize = fontSizeRef.value + "px";
  };