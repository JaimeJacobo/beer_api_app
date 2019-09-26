const request = require('request')
const chalk = require('chalk')


const get_info = (res_int, url_int, page_int)=>{
  let arrayOfNames = []
  const url = url_int
  request({ url: url, json: true}, (error ,response)=>{
    if(!error){        
      for(let i = 0; i < response.body.length; i++){
        arrayOfNames.push(response.body[i].name)
      }
      res_int.render(page_int, {
        name: response.body[0].name,
        array: arrayOfNames
      })      
    } else {
      console.log(chalk.red('Error while trying to load the API'))
    }
  })
}

module.exports = {
  get_info: get_info
}