const button = document.querySelector('#clear-board');
const darkColor = document.querySelector('.dark');
const darkBlueColor = document.querySelector('.dark-blue');
const lightBlueColor = document.querySelector('.light-blue');
const lightGreenColor = document.querySelector('.light-green');

// 7. Created function for changed selected
function changeSelected(event) {
  const pixelColor = document.querySelector('.selected');
  pixelColor.classList.remove('selected');
  event.target.classList.add('selected');
}
darkColor.addEventListener('click', changeSelected);
darkBlueColor.addEventListener('click', changeSelected);
lightBlueColor.addEventListener('click', changeSelected);
lightGreenColor.addEventListener('click', changeSelected);

// 8. Created function for select pixel
function pixelColorSelected(event) {
  const select = document.querySelector('.selected');
  const selectColor = window.getComputedStyle(select).getPropertyValue('background-color');
  const argumentEvento = event.target;
  argumentEvento.style.backgroundColor = selectColor;
}
document.querySelector('#pixel-board').addEventListener('click', pixelColorSelected);

// 9. Created function for button of clean
function clearPixels() {
  const pixel = document.querySelectorAll('.pixel');

  for (let i = 0; i < pixel.length; i += 1) {
    pixel[i].style.backgroundColor = 'white';
  }
}
button.addEventListener('click', clearPixels);
