//* ids
const COLOR_PALETTE_ID = '#color-palette';
const PIXEL_BOARD_ID = '#pixel-board';
const SECTION_ID = '#section-id';

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
