/*Напиши скрипт, который для каждого элемента массива ingredients создаст отдельный li, 
после чего вставит все li за одну операцию в список ul.ingredients*/

const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

/************ 1 */
const ingredientsListEl = document.querySelector('#ingredients');
console.log(ingredientsListEl);

// const elements = ingredients.map(ingredient => {
//   const ingredientsItemEl = document.createElement('li');
//   ingredientsItemEl.textContent = ingredient;

//   return ingredientsItemEl;
// });

// console.log(elements);
// ingredientsListEl.append(...elements);

// console.log(ingredientsListEl);

/************ 2 */
const createIngredientsList = ingredient => {
  return ingredient.map(ingredient => {
    const ingredientsItemEl = document.createElement('li');
    ingredientsItemEl.textContent = ingredient;

    return ingredientsItemEl;
  });
};

const elements = createIngredientsList(ingredients);
ingredientsListEl.append(...elements);
