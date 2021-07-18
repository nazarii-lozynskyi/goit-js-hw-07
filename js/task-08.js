/*         Ще працюю над вирішенням */

const refs = {
  wrapper: document.querySelector('#controls'),
  input: document.querySelector('[type = "number"]'),
  renderBtn: document.querySelector('[data-action="render"]'),
  destroyBtn: document.querySelector('[data-action="destroy"]'),
  resultWrapper: document.querySelector('#boxes'),
};

console.log(refs.wrapper);
console.log(refs.input);
console.log(refs.renderBtn);
console.log(refs.destroyBtn);
console.log(refs.resultWrapper);

// refs.input.addEventListener('input', onInputNumber);

// function onInputNumber() {
//   console.log(refs.input.value);
// }

// refs.renderBtn.addEventListener('click', createBoxes);
// refs.destroyBtn.addEventListener('click', destroyBoxes);

console.log(refs.input.value);

// var render = document.querySelector('[data-action="render"]');
// var destroy = document.querySelector('[data-action="destroy"]');
// var boxes = document.getElementById('boxes');
render.addEventListener('click', getAmount);
// destroy.addEventListener('click', destroyBoxes);

function getAmount() {
  var amount = +document.querySelector('#controls input').value;
  createBoxes(amount);
}

// function createBoxes(amount) {
//   var basicSize = 30;
//   var fragment = document.createDocumentFragment();
//   for (var i = 0; i < amount; i++) {
//     var size = basicSize + i * 10;
//     var div = document.createElement('div');
//     div.style.cssText = `width: ${size}px; height: ${size}px; background-color: rgba( ${random()} , ${random()} , ${random()} )`;
//     fragment.appendChild(div);
//   }
//   boxes.appendChild(fragment);
// }

// function destroyBoxes() {
//   boxes.innerHTML = '';
// }

// function random() {
//   return Math.floor(Math.random() * 256);
// }
