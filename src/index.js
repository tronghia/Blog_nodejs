const path = require('path')
const express = require('express')
const morgan = require('morgan')
const hbs = require('express-handlebars')

const app = express()

const route = require('./routes')


app.use(express.static(path.join(__dirname, 'public')))

app.use(express.urlencoded({
  extended: true
}));
app.use(express.json())

//HTTP logger
app.use(morgan('combined'))

//Template engine
app.engine('hbs', hbs.engine({
  extname: '.hbs'
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));

//Routes init
route(app);



app.listen(3000)