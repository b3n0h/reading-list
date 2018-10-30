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
      <Form />
    </body>
    <script src="/index.js" type='application/javascript' />
    <script src="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.3.1/semantic.js" />
  </html>

module.exports = Home