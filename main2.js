function exibirInput() {
    // array de letras proibidas
    const letraProibidas = [ "j", "w", "k", "y", "ç", "h", "q"," ", "/", ",", "&", "%", "$", "#", "@", "!"]; 
    
    //leitura da cadeia para ser analisada
    let palavra = document.querySelector("#input-field").value.toLowerCase();
    
    // garantindo que a cadeia tenha ate 10 caracteres
    if (palavra.length > 10) {
        palavra = palavra.substring(0, 10);
    }
    //regex das consoantes permitidas
    let consoantes = /^[bcdfglmnprstvxz]+$/;
    //regex das vogais permitidas
    let vogais = /^[aeiou]+$/;
    //array numericos
    let numeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    let validacaoConsoante = true;
    let validacaovogais = true;
    const ultimaLetra = palavra.charAt(palavra.length - 1);
    const primeiraLetra = palavra.charAt(0);
    
    // for ele verifica as seguintes condições: se a palavra tem uma letra proibida,  se começa com x e y, validação de consoante e vogal, permitir numero no final.
    
    for (let i = 0; i < palavra.length; i++) {
        if (letraProibidas.includes(palavra.charAt(i))) {
        
            resposta('caractere não valido')
        return 
             
        } else if(primeiraLetra === "x" || primeiraLetra === "z" ){
           return resposta("cadeia é uma palavra reservada");
        } else if(i % 2 === 0 && i !== palavra.length - 1 && !consoantes.test(palavra[i])) {
            validacaoConsoante = false;
        } else if (numeros.includes(ultimaLetra)) {
            validacaoConsoante = true;
        }else if(i % 2 !== 0 && i !== palavra.length - 1 && !vogais.test(palavra[i])) {
            validacaovogais = false;
        } else if (numeros.includes(ultimaLetra)) {
            validacaovogais = true;
        }
    }
    if(validacaoConsoante === true && validacaovogais === true){
        resposta("A palavra: " + palavra + " é permitida");
    } else{
        resposta("A palavra: " + palavra + " não é permitida");
    }  
}


function fecharModal(){
    document.getElementById('modal').style.display = 'none'   
}

function resposta(resposta){
    document.getElementById('modal').style.display = 'flex'   
    return document.getElementById('resposta').innerHTML =  `
    <div class="card-modal">
        <button onclick="fecharModal()">X</button>
        <p style="color: black">${resposta}</p>
    </div>
    `   
}


