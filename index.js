const pesquisar = require('./robots/pesquisa.js')

  
  async function start() {
    try {
      pesquisar

    } catch (e) {
      console.log(e, "ERROR");
  };
  }
  
  start()