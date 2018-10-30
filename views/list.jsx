const React = require('react')
const Book = require('./book')

const BookList = props => 
  <html lang="en">
  <head>
    <meta charSet="UTF-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <meta httpEquiv="X-UA-Compatible" content="ie=edge"/>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.3.1/semantic.css" />
    <title>Book List</title>
  </head>
  <body>
    <div className="ui grid centered padded">
      <div className="eight wide column">
        <h1>Book List</h1>
          <li><a href="/">Add Book</a></li>
          <li><a href="/list">Reading List</a></li>
      </div>
    </div>
    <ul>
      {props.list.map(book =>
          <Book title={book.title} author={book.author} pages={book.pages} currentPage={book.currentPage} isRead={book.isRead} />
        )}
    </ul>
  <script src="/index.js" type='application/javascript' />
  <script src="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.3.1/semantic.js" />
  </body>
  </html>

  module.exports = BookList