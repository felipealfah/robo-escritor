const inserirdados = require('./robots/input.js')
const pesquisar = require('./robots/pesquisa.js')

  
  async function start() {
    try {

      inserirdados
      await pesquisar

    } catch (e) {
      console.log(e, "ERROR");
  };
  }
  
  start()