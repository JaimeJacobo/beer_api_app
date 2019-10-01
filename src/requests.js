const request = require('request')
const chalk = require('chalk')


const get_info = (res_int, url_int, page_int)=>{
  let arrayOfNames = [];
  let arrayOfMalt = [];
  let arrayOfHops = [];
  let arrayOfYeast = [];
  const url = url_int
  request({ url: url, json: true}, (error ,response)=>{
    if(!error){ 

      for(let i = 0; i < response.body.length; i++){
        arrayOfNames.push(response.body[i].name)
      }

      for(let i = 0; i < response.body[0].ingredients.malt.length; i++){
        arrayOfMalt.push(response.body[0].ingredients.malt[i].name)
      }

      for(let i = 0; i < response.body[0].ingredients.hops.length; i++){
        arrayOfHops.push(response.body[0].ingredients.hops[i].name)
      }

      arrayOfYeast.push(response.body[0].ingredients.yeast)

      
      res_int.render(page_int, {
        array: arrayOfNames,
        name: response.body[0].name,
        tagline: response.body[0].tagline,
        image: response.body[0].image_url,
        malt: arrayOfMalt,
        hops: arrayOfHops,
        yeast: arrayOfYeast,
        tips: response.body[0].brewers_tips
      })      
    } else {
      console.log(chalk.red('Error while trying to load the API'))
    }
  })
}

module.exports = {
  get_info: get_info
}