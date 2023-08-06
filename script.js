//* ids
const COLOR_PALETTE_ID = '#color-palette';
const PIXEL_BOARD_ID = '#pixel-board';
const SECTION_ID = '#section-id';

//* classes
const BLACK_CLASS = '.black';
const COLOR_CLASS = '.color';
const PIXEL_CLASS = '.pixel';
const SELECTED_CLASS = '.selected';

//* ---------- Requisito 01 ----------
const header = document.createElement('header');
const headerInBody = document.body.appendChild(header);

const h1 = document.createElement('h1');
h1.id = 'title';
h1.textContent = 'Paleta de Cores';
headerInBody.appendChild(h1);

//* ---------- Requisito 02 ----------
const divColorPalette = document.createElement('div');
divColorPalette.id = 'color-palette';
document.body.appendChild(divColorPalette);

const arrColors = ['black', 'cyan', 'khaki', 'orange'];

for (let i = 0; i < arrColors.length; i += 1) {
  const divColors = document.createElement('div');
  divColors.classList.add('color');
  divColors.classList.add(arrColors[i]);
  document.querySelector(COLOR_PALETTE_ID).appendChild(divColors);
}

//* ---------- Requisito 04 ----------
const section = document.createElement('section');
section.id = 'section-id';
document.body.appendChild(section);

const divPixelBoard = document.createElement('div');
divPixelBoard.id = 'pixel-board';
document.querySelector(SECTION_ID).appendChild(divPixelBoard);

for (let i = 0; i < 25; i += 1) {
  const divPixel = document.createElement('div');
  divPixel.classList.add('pixel');
  document.querySelector(SECTION_ID).style.maxWidth = `${5 * 42}px`; // limitar o tamanho da section (CSS)
  document.querySelector(PIXEL_BOARD_ID).appendChild(divPixel);
}

//* ---------- Requisito 06 ----------
const selectColorBlack = document.querySelector(BLACK_CLASS);
selectColorBlack.classList.add('selected');

//* ---------- Requisito 07 ----------
const selectColorInPalette = (e) => {
  const selected = document.querySelector(SELECTED_CLASS);
  selected.classList.remove('selected');
  e.target.classList.add('selected');
};

const selectAllColors = document.querySelectorAll(COLOR_CLASS);
for (let i = 0; i < selectAllColors.length; i += 1) {
  selectAllColors[i].addEventListener('click', selectColorInPalette);
}

//* ---------- Requisito 08 ----------
const checkBackgroundColorInSection = () => {
  const elementPixelBoard = document.querySelector(PIXEL_BOARD_ID);
  const pixelBoardStyle = window.getComputedStyle(elementPixelBoard);
  return pixelBoardStyle.getPropertyValue('background-color');
};

const paintPixel = (e) => {
  const selected = document.querySelector(SELECTED_CLASS);
  const selectStyle = window.getComputedStyle(selected);
  const selectBackgroundColor = selectStyle.getPropertyValue('background-color');
  e.target.style.backgroundColor = selectBackgroundColor;

  if (checkBackgroundColorInSection() !== 'rgba(0, 0, 0, 0)') {
    document.querySelector(PIXEL_BOARD_ID).style.backgroundColor = 'white';
  }
};

const pixelBoard = document.querySelector(PIXEL_BOARD_ID);
pixelBoard.addEventListener('click', paintPixel);

//* ---------- Requisito 09 ----------
const clearButton = document.createElement('button');
clearButton.id = 'clear-board';
clearButton.textContent = 'Limpar';
const elementSection = document.querySelector(SECTION_ID);
elementSection.parentNode.insertBefore(clearButton, elementSection);

const clearPixels = () => {
  const pixels = document.querySelectorAll(PIXEL_CLASS);

  for (let i = 0; i < pixels.length; i += 1) {
    pixels[i].style.backgroundColor = 'white';
  }
};

clearButton.addEventListener('click', clearPixels);
