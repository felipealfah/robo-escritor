const readline = require ('readline-sync')
const puppeteer = require('puppeteer'); 

function start () {

    const content = {}

    content.keyword = askAndReturnSearchTerm()

    function askAndReturnSearchTerm(){
        return readline.question('Digite o termo que voce quer buscar: ')
    }

    const buscasemespaco = {}
    buscasemespaco.opa = String(content.keyword).replace(' ','+');
    


    console.log(content);
    console.log(buscasemespaco);

    const buscaNoGoogle = async () => {
        const browser = await puppeteer.launch();
        const page = await browser.newPage();
        await page.goto('https://www.google.com/search?q='+buscasemespaco.opa+'&lr=lang_es-419');
        //await page.screenshot({ path: 'example.png' });

        console.log (page);
              
        await browser.close();
      }

      
}

start()