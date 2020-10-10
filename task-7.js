// Напиши скрипт, который реагирует на изменение значения input#font-size-control (событие input) и изменяет инлайн-стиль span#text обновляя свойство font-size. В результате при перетаскивании ползунка будет меняться размер текста.

const rangeInput = document.querySelector("#font-size-control");
const textSpan = document.querySelector("#text");

function onFontSizeControl() {
  textSpan.style.fontSize = rangeInput.value + "px";
}

rangeInput.addEventListener("input", onFontSizeControl);
