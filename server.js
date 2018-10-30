const express = require('express')
const app = express()
const bodyparser = require('body-parser')
const path = require('path')

app.use(express.static(path.join(__dirname, 'public')))
app.set('views', path.join(__dirname, 'views'))
app.use(bodyparser.urlencoded({ extended: true }))
app.use(bodyparser.json())
app.set('view engine', 'jsx')

require('./routes')(app)

app.engine('jsx', require('express-react-views').createEngine());

app.listen(4000, _ => console.log('localhost:4000'))