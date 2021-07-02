const validationInputEl = document.querySelector('#validation-input');
validationInputEl.addEventListener('blur', onInputBlur);

function onInputBlur(event) {
  const inputLength = Number(validationInputEl.getAttribute('data-length'));
  const inputValue = event.target.value.length;

  if (inputValue === inputLength) {
    validationInputEl.classList.add('valid');
    validationInputEl.classList.remove('invalid');
  } else if (inputValue === 0) {
    validationInputEl.classList.remove('valid');
    validationInputEl.classList.remove('invalid');
  } else {
    validationInputEl.classList.remove('valid');
    validationInputEl.classList.add('invalid');
  }
  console.log(inputLength);
  console.log(inputValue);
  console.log(inputLength === inputValue);
}
