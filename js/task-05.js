const refs = {
  input: document.querySelector('#name-input'),
  span: document.querySelector('#name-output'),
};

// const input = document.querySelector('#name-input');
// console.log(input);
// const span = document.querySelector('#name-output');
// console.log(span);

// refs.input.addEventListener('focus', onInputFocus);
// refs.input.addEventListener('blur', onInputBlur);

// function onInputFocus() {
//   console.log('focus');
// }

// function onInputBlur() {
//   console.log('blur');
// }

refs.input.addEventListener('input', onInputChange);

function onInputChange(event) {
  console.log(event.currentTarget.value);

  refs.span.textContent = event.currentTarget.value;

  if (refs.span.textContent === '') {
    refs.span.textContent = 'незнакомец';
  }
}
