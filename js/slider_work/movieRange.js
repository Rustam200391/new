// Получаем элементы
var accordionBodyContent = document.getElementById("newContainer");
var movieInner = document.querySelector(".movie-inner");

// Функция для перемещения содержимого .accordion-body
function moveAccordionBodyContent() {
  // Проверяем ширину экрана
  if (window.innerWidth < 1024) {
    // Перемещаем содержимое .accordion-body в .movie-inner
    while (accordionBodyContent.firstChild) {
      movieInner.appendChild(accordionBodyContent.firstChild);
    }
  } else {
    // Если ширина экрана больше или равна 1024, возвращаем содержимое обратно в .accordion-body
    while (movieInner.firstChild) {
      accordionBodyContent.appendChild(movieInner.firstChild);
    }
  }
}

// Вызываем функцию при загрузке страницы и при изменении размера окна
window.addEventListener("load", moveAccordionBodyContent);
window.addEventListener("resize", moveAccordionBodyContent);
