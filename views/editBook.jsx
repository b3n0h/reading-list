const React = require('react')
const Form = require('./form')

const Book = props =>
  <html lang="en">
  <head>
    <meta charSet="UTF-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <meta httpEquiv="X-UA-Compatible" content="ie=edge"/>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.3.1/semantic.css" />  
    <title>Edit Reading List</title>
  </head>
  <body>
    <Form title={props.title} author={props.author} pages={props.pages} currentPage={props.currentPage} haveRead={props.haveRead} />
  <script src="https://code.jquery.com/jquery-3.3.1.js" integrity="sha256-2Kok7MbOyxpgUVvAk/HJ2jigOSYS2auK4Pfzbm7uH60=" crossOrigin="anonymous" />
  <script src="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.3.1/semantic.js" />
  <script src="./js/edit.js" type='application/javascript' />
  </body>
  </html>

  module.exports = Book