const request = require('request')
const chalk = require('chalk')


const my_request = (res_int, url_int)=>{
  const url = url_int
  request({ url: url, json: true}, (error ,response)=>{
    if(!error){
      res_int.render('index', {
        name: response.body[0].name
      })      
    } else {
      console.log(chalk.red('Error while trying to load the API'))
    }
  })
}

module.exports = {
  get_info: my_request
}