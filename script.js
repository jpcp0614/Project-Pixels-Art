//* ---------- Requisito 01 ----------
const header = document.createElement('header');
const headerInBody = document.body.appendChild(header);

const h1 = document.createElement('h1');
h1.id = 'title';
h1.textContent = 'Paleta de Cores';
headerInBody.appendChild(h1);
