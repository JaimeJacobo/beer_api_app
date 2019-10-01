const express = require('express')
const chalk = require('chalk')
const path = require('path')
const hbs = require('hbs')
let my_requests = require('./requests')

const app = express();


//Setting up express and hbs
app.set('view engine', 'hbs')

const publicPath = path.join(__dirname, '../public')
app.use(express.static(publicPath))

const viewsPath = path.join(__dirname, '../templates/views')
app.set('views', viewsPath)

const partialsPath = path.join(__dirname, '../templates/partials')
hbs.registerPartials(partialsPath)


//routes

const main_url = 'https://api.punkapi.com/v2/beers/'

app.get('/', (req, res)=>{
  res.render('index', {})
})

app.get('/random-beer', (req, res)=>{
  const url = main_url + 'random'
  my_requests.get_info(res, url, 'one-beer-page')
})

app.get('/all-beers', (req, res)=>{
  let url = main_url
  my_requests.get_info(res, url, 'all-beers')
})

app.get('*', (req, res)=>{
  res.send('<h1>Page not found</h1>')
})



//listening to the app
app.listen(3000, ()=>{
  console.log(chalk.green.inverse("Listening in port 3000"))
})