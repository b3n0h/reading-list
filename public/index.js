const fetch = window.fetch

document.querySelector('#addBook').addEventListener('click', event => {
  event.preventDefault()
  fetch('/books', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
    body: JSON.stringify({
      id: document.querySelector('#title').value,
      title: document.querySelector('#title').value,
      author: document.querySelector('#author').value,
      pages: document.querySelector('#pageCount').value,
      currentPage: document.querySelector('#currentPage').value,
      isRead: document.querySelector('#haveRead').checked
    })
  })
  .then(r => {
    console.log(r)
    document.querySelector('#title').value = ''
    document.querySelector('#author').value = ''
    document.querySelector('#pageCount').value = ''
    document.querySelector('#currentPage').value = ''
    document.querySelector('#haveRead').checked = false
  })
  .catch(e => console.log(e))
})
