let rangeMin = 100;
// Minimum difference between slider values.
const range = document.querySelector(".range-selected");
// DOM element with class "range-selected".
const rangeInput = document.querySelectorAll(".range-input input");
// A collection of DOM elements tagged <input> that have the class "range-input".
const rangePrice = document.querySelectorAll(".range-price input");
// A collection of DOM elements with an <input> tag that have the class "range-price".


// Event handler for rangeInput elements
rangeInput.forEach((input) => {
  input.addEventListener("input", (e) => {
    let minRange = parseInt(rangeInput[0].value);
    let maxRange = parseInt(rangeInput[1].value);
    if (maxRange - minRange < rangeMin) {
      if (e.target.className === "min") {
        rangeInput[0].value = maxRange - rangeMin;
      } else {
        rangeInput[1].value = minRange + rangeMin;
      }
    } else {
      rangePrice[0].value = minRange;
      rangePrice[1].value = maxRange;
      range.style.left = (minRange / rangeInput[0].max) * 100 + "%";
      range.style.right = 100 - (maxRange / rangeInput[1].max) * 100 + "%";
    }
  });
});
// For an element in rangeInput, an "input" event handler is installed (an event when input changes).
// Inside the handler, the difference between the values ​​of the first and second sliders (minRange and maxRange) is checked.
// If the difference is less than rangeMin, then the slider value is changed so that the difference becomes equal to rangeMin.
// Otherwise, the price values ​​(rangePrice) are updated, and the style of the range element is updated depending on the selected range.

rangePrice.forEach((input) => {
  input.addEventListener("input", (e) => {
    let minPrice = rangePrice[0].value;
    let maxPrice = rangePrice[1].value;
    if (maxPrice - minPrice >= rangeMin && maxPrice <= rangeInput[1].max) {
      if (e.target.className === "min") {
        rangeInput[0].value = minPrice;
        range.style.left = (minPrice / rangeInput[0].max) * 100 + "%";
      } else {
        rangeInput[1].value = maxPrice;
        range.style.right = 100 - (maxPrice / rangeInput[1].max) * 100 + "%";
      }
    }
  });
});
// For each element in the rangePrice collection, an "input" event handler is installed.
// Inside the handler, the difference between the values ​​of the first and second prices (minPrice and maxPrice) is checked.
// If the difference is greater than or equal to rangeMin and the maximum price does not exceed the maximum value of the second slider, then the values ​​of the sliders and the style of the range element are updated.
