// Напиши скрипт, который выполнит следующие операции.

// Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов li.item. Получится 'В списке 3 категории.'.

// Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль текст заголовка элемента (тега h2) и количество элементов в категории (всех вложенных в него элементов li).

// Например для первой категории получится:

// Категория: Животные
// Количество элементов: 4

const listRef = document.querySelector("#categories");

console.log(`В списке ${listRef.children.length} категории.`);

const liItemRef = listRef.querySelectorAll("li.item");

// console.log(liItemRef.);
liItemRef.forEach(({ children }) =>
  console.log(
    `Категория: ${children[0].textContent}\nКоличество элементов: ${children[1].children.length}`
  )
);
