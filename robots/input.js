const fs = require('fs')
const readline = require('readline-sync')
const state = require('./state');


function robot() {

  const content = {}
  
  content.searchTerm = askAndReturnSearchTerm()
  state.save(content)

  function askAndReturnSearchTerm() {
    return readline.question('Digite a Palavra-chave: ')
  }

}



module.exports = robot();