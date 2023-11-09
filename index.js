const fs = require("fs");

fs.readFile("./gutaq1.teste",{encoding: 'utf-8'},(erro, dados) => {

    if(erro){
        console.log("Ocorreu uma falla durante a leitura do arquivo!");
    }else{
        console.log(dados);
    }
});