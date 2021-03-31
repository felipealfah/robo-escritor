const fs = require('fs')
const contentFilePath = "./artigos/content.json"
const state = require('./state');


function robot() {
  const content = {}
  state.ler(content)

  console.log(content);

  const axios = require('axios');

// set up the request parameters
const params = {
  api_key: "3843F994DECA4450BA53C298286397C0",
  q: "emprendimiento femenino",
  output: "json",
  hl: "es-419",
  include_answer_box: "true",
  flatten_results: "false",
  num: "10"
}

// make the http GET request to Scale SERP
axios.get('https://api.scaleserp.com/search', { params })
  .then(response => {

    // print the JSON response from Scale SERP
    const contentSearch = JSON.stringify(response.data, 0, 2)
  return fs.writeFile(contentFilePath, contentSearch, 'utf8', function (err)
  {if (err) {
    return console.log(err);
    //tive que colocar o formato de utf8 e adicionei a funcão err para verificar o erro.
}
console.log("Salvo no Json com Sucesso! ");
});   
}
,)}
module.exports = robot()