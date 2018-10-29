const express = require('express')
const app = express()
const bodyparser = require('body-parser')
const path = require('path')

app.use(bodyparser.urlencoded({ extended: true }))
app.use(bodyparser.json())

app.listen(4000, _ => console.log('localhost:4000'))