const refs = {
  subtract: document.querySelector("[data-action='increment']"),
  add: document.querySelector("[data-action='decrement']"),
  span: document.querySelector('#value'),
  wrapper: document.querySelector('#counter'),
};

let counterValue = 0;
const increment = () => {
  counterValue += 1;

  refs.span.textContent = counterValue;
};

const decrement = () => {
  counterValue -= 1;

  refs.span.textContent = counterValue;
};

refs.subtract.addEventListener('click', increment);
refs.add.addEventListener('click', decrement);
