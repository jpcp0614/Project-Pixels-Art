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

//* ----- Requisito bônus 10 e 11 -----
const divForInputAndButton = document.createElement('div');
divForInputAndButton.id = 'input-button';
const sectionElement = document.querySelector(SECTION_ID);
sectionElement.parentNode.insertBefore(divForInputAndButton, sectionElement);

// input
const input = document.createElement('input');
input.id = 'board-size';
input.type = 'number';
input.min = '1';
input.autofocus = true;
input.placeholder = 'Digite um valor aqui';
divForInputAndButton.appendChild(input);

// button
const btn = document.createElement('button');
btn.id = 'generate-board';
btn.textContent = 'Criar';
divForInputAndButton.appendChild(btn);

const deleteBoard = () => {
  const boardPixels = document.querySelectorAll(PIXEL_CLASS);
  for (let i = 0; i < boardPixels.length; i += 1) {
    boardPixels[i].remove();
  }
};

const makeBoard = (inputValue) => {
  for (let i = 1; i <= inputValue ** 2; i += 1) {
    const divPixels = document.createElement('div');
    divPixels.classList.add('pixel');
    document.querySelector(SECTION_ID).style.maxWidth = `${inputValue * 42}px`;
    document.querySelector(PIXEL_BOARD_ID).appendChild(divPixels);
  }
};

const checkAndCreateNewBoard = () => {
  if (input.value === '') alert('Board inválido!');
  if (input.value < 5) {
    deleteBoard();
    makeBoard(5);
    input.value = '5';
  } else if (input.value > 50) {
    deleteBoard();
    makeBoard(50);
    input.value = '50';
  } else {
    deleteBoard();
    makeBoard(input.value);
  }
};

btn.addEventListener('click', checkAndCreateNewBoard);

//* ------- Requisito bônus 12 -------
const generateRGB = () => {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);
  return `rgb(${r}, ${g}, ${b})`;
};

const colorPalette = document.querySelectorAll(COLOR_CLASS);
for (let i = 0; i < colorPalette.length; i += 1) {
  if (colorPalette[i].classList[2] === 'selected') {
    colorPalette[0].style.backgroundColor = 'black';
  } else {
    colorPalette[i].style.backgroundColor = generateRGB();
  }
}
