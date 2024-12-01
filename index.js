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




const express = require('express')
const app = express()
const port = 3000

app.get('/', function (req, res) {
  res.send('abcABC')
})

app.listen(3000)