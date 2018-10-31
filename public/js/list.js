const fetch = window.fetch

document.addEventListener('click', event => {
  if (event.target && event.target.id === 'editBtn') {
    fetch(`/books/${event.target.getAttribute('data-id')}`)
      .then(r => {
        console.log(r)
        window.location = './book'
      })
      .catch(e => console.error(e))
  } else if (event.target && event.target.id === 'deleteBtn') {
    fetch(`/books/${event.target.getAttribute('data-id')}`, { method: 'DELETE' })
      .then(r => {
        console.log(r)
        window.location = './list'
      })
  }
})