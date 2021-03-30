const state = require('./state');

function robot() {
  const content = {}
  state.ler(content)

  console.log(content);
}





module.exports = robot(); 