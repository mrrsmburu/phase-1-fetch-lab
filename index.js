function fetchBooks() {
  // To pass the tests, don't forget to return your fetch!
  
}

function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});
function fetchBooks() {
  fetch('https://anapioficeandfire.com/api/books')
    .then(response => response.json())
    .then(json => renderBooks(json));
}
function renderBooks(json) {
  const bookTitles = json.map(book => book.name);
  const titlesList = document.createElement('ul');
  bookTitles.forEach(title => {
    const titleElement = document.createElement('li');
    titleElement.textContent = title;
    titlesList.appendChild(titleElement);
  });
  document.body.appendChild(titlesList);
}
