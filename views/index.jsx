const React = require('react')
const Form = require('./form')

const Home = () => 
  <html lang="en">
    <head>
      <meta charSet="UTF-8"/>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      <meta httpEquiv="X-UA-Compatible" content="ie=edge"/>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.3.1/semantic.css" />
      <title>Reading List</title>
    </head>
    <body>
      <div className="ui grid centered padded">
        <div className="eight wide column">
          <h1>Reading List App</h1>
          <li><a href="/">Add Book</a></li>
          <li><a href="/list">Reading List</a></li>
        </div>
      </div>
      <Form />
    </body>
    <script src="https://code.jquery.com/jquery-3.3.1.js" integrity="sha256-2Kok7MbOyxpgUVvAk/HJ2jigOSYS2auK4Pfzbm7uH60=" crossOrigin="anonymous" />
    <script src="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.3.1/semantic.js" />
    <script src="./js/index.js" type='application/javascript' />
  </html>

module.exports = Home