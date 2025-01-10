// const path = require('path')
// const express = require('express')
// const handlebars = require('express-handlebars')
// const morgan = require('morgan')
// const app = express()

// //Template engine
// app.engine('hbs', handlebars.engine({
//   extname: '.hbs'
// }));
// app.set('view engine', 'hbs');
// app.set('views', path.join(__dirname, 'resources/views'));

// //HTTP logger
// app.use(morgan('combined'))

// app.use(express.static(path.join(__dirname, 'public')))

// app.get('/', function (req, res) {
//   res.render('home')
// })

// app.get('/news', function (req, res) {
//   res.render('news')
// })

// app.listen(3000)



const path = require('path')
const express = require('express')
const morgan = require('morgan')
const hbs = require('express-handlebars')

const app = express()


app.use(express.static(path.join(__dirname, 'public')))

//HTTP logger
app.use(morgan('combined'))

//Template engine
app.engine('hbs', hbs.engine({
  extname: '.hbs'
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));

app.get('/', (req, res) => {
  res.render('home')
})

app.get('/news', (req, res) => {
  res.render('news')
})

app.listen(3000)