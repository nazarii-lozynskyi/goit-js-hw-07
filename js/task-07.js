const refs = {
  inputEl: document.querySelector('#font-size-control'),
  spanEl: document.querySelector('#text'),
};

//console.log(refs.spanEl.textContent);
refs.inputEl.addEventListener('input', resizeText);

function resizeText() {
  refs.spanEl.style.fontSize = refs.inputEl.value + 'px';
  //console.log(refs.inputEl.value);

  //console.log(refs.spanEl.style.fontSize);
}
