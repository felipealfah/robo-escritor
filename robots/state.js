const fs = require('fs')
const contentFilePath = "./artigos/content.json"



function save(content) {
  const contentString = JSON.stringify(content)
  return fs.writeFile(contentFilePath, contentString, 'utf8', function (err)
  {if (err) {
    return console.log(err);
    //tive que colocar o formato de utf8 e adicionei a funcão err para verificar o erro.
}
console.log("Realizando Busca para a palavra-chave: ",content);
});   
}

function ler() {
  const jsonData = fs.readFileSync(contentFilePath , "utf8", function(err, content){

    try{
      jsonData = JSON.stringify(content);
    }

    catch(err){
      return console.log("Erro ao ler arquivo");
    }
    
    /**
    Se precisar em array use:
    jsonData = Object.keys(jsonData);
   / */
  });
}

module.exports = {
  save,
  ler
}