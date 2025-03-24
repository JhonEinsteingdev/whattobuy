// Selecciona elementos del DOM
const itemInput = document.getElementById('item-input');
const addButton = document.getElementById('add-button');
const itemList = document.getElementById('item-list');

// Añade un artículo a la lista
addButton.addEventListener('click', () => {
  const itemText = itemInput.value.trim();
  if (itemText !== '') {
    const li = document.createElement('li');
    li.textContent = itemText;
    itemList.appendChild(li);
    itemInput.value = '';
    saveList();
  }
});

// Guarda la lista en el almacenamiento local
function saveList() {
  const items = [];
  itemList.querySelectorAll('li').forEach(li => {
    items.push(li.textContent);
  });
  localStorage.setItem('listaCompras', JSON.stringify(items));
}

// Carga la lista desde el almacenamiento local
function loadList() {
  const items = JSON.parse(localStorage.getItem('listaCompras')) || [];
  items.forEach(item => {
    const li = document.createElement('li');
    li.textContent = item;
    itemList.appendChild(li);
  });
}

// Cargar la lista al iniciar la aplicación
loadList();