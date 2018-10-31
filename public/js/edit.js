const fetch = window.fetch

document.querySelector('#editBook').addEventListener('click', event => {
  event.preventDefault()
  fetch(`/books/${document.querySelector('#title').value}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
    body: JSON.stringify({
      title: document.querySelector('#title').value,
      author: document.querySelector('#author').value,
      pages: document.querySelector('#pageCount').value,
      currentPage: document.querySelector('#currentPage').value,
      isRead: document.querySelector('#haveRead').checked
    })
  })
    .then(r => {
      console.log(r)
      window.location = './list'
    })
    .catch(e => console.error(e))
})