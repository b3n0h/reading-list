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
          <ul>
            <li><a href="/">Add Book</a></li>
            <li><a href="/list">Reading List</a></li>
          </ul>
      </div>
    </div>
      <div className="ui grid centered padded">
        <div className="eight wide column">
          <ul>
            {props.list.map(book =>
                <Book title={book.title} author={book.author} pages={book.pages} currentPage={book.currentPage} haveRead={book.haveRead} />
              )}
          </ul>
        </div>
      </div>
  <script src="https://code.jquery.com/jquery-3.3.1.js" integrity="sha256-2Kok7MbOyxpgUVvAk/HJ2jigOSYS2auK4Pfzbm7uH60=" crossOrigin="anonymous" />
  <script src="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.3.1/semantic.js" />
  <script src="./js/list.js" type='application/javascript' />
  </body>
  </html>

  module.exports = BookList