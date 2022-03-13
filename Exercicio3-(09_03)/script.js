function sortearNumero(x){
    if(x == 0){
        let numSecreto = parseInt(Math.random() * 11);
        console.log(numSecreto);
        return numSecreto;
    } 
}

    let textStart = "O número foi sorteado e é um valor entre 0 e 10. Escreva 'dica' para receber dicas.";
    let textErro = "Você errou!";
    let textPerdeu = "Infelizmente nosso herói não conseguiu passar pelo desafio da Esfinge.";
    let textAcerto = "Você conseguiu derrotar a Esfinge. Parabéns!";
    let dica1 = "O número é menor que 5";
    let dica2 = "O número é maior que 5";
    let dica3 = "O número está entre 34 e 67";
    let flag = 0; // (0) Estado inicial/ (1) Impedindo resetar número secreto
                        // (2) Caso a pessoa peça dica
    let contMortes = 0;
    let numeroSorteado = 0;

function game(){
    if(flag == 0){
        numeroSorteado = sortearNumero(flag);
        document.getElementById("btn_comecar").innerHTML = "Começar!";
        document.getElementById("text-send").disabled = false;
        document.getElementById("text-send").style.backgroundColor = "#29b367";
        document.getElementById("iconLife1").style.visibility="visible";
        document.getElementById("iconLife2").style.visibility="visible";
        document.getElementById("iconLife3").style.visibility="visible";
        document.getElementById("valorRevelado").style.visibility = "hidden";
        document.getElementById("inimigo").style.visibility="visible";
        document.getElementById("hero").src="../_imgs/Naham.png";
        let enderecoTextHeroi = document.getElementById("text5");
        enderecoTextHeroi.innerHTML = "";
        flag = 1;
        let enderecoTextArea = document.getElementById("text2");
        enderecoTextArea.innerHTML = textStart;
    }
}

let textosMensagens = [];
function chat(){
    let enderecoInptText = document.getElementById("inp_text"); //Pegando endereço input
    let enderecoTextHeroi = document.getElementById("text5"); //Pegando endereço span
    let inptext = document.getElementById("inp_text").value; //Pegando valor input
    let adicionar = textosMensagens.push(inptext); //adicionando valor ao array
    //Escrevendo as mensagens
    console.log(textosMensagens);
    enderecoInptText.value = "";
    enderecoTextHeroi.innerHTML = "Eu > " + [...textosMensagens];
   
    //adicionando interação
    if(inptext === "dica" || inptext === "Dica"){
        if(numeroSorteado < 5) {
            let enderecoTextArea = document.getElementById("text3");
            enderecoTextArea.innerHTML = dica1;
        }else if(numeroSorteado > 5){
            let enderecoTextArea = document.getElementById("text3");
            enderecoTextArea.innerHTML = dica2;
        }else if(numeroSorteado == 5){
            let enderecoTextArea = document.getElementById("text3");
            enderecoTextArea.innerHTML = dica3;
        }
    }else if(inptext == numeroSorteado){
            let enderecoTextArea = document.getElementById("text4");
            document.getElementById("inimigo").style.visibility="hidden";
            document.getElementById("hero").src="../_imgs/NahamWin.png";
            document.getElementById("valorRevelado").style.visibility = "visible";
            let enderecoValor = document.getElementById("valorRevelado");
            enderecoValor.innerHTML = numeroSorteado;
            document.getElementById("btn_comecar").innerHTML = "Recomeçar!";
            document.getElementById("text-send").disabled = true;
            document.getElementById("text-send").style.backgroundColor = "#b32e29";
            textosMensagens.length = 0;
            flag = 0;
            contMortes = 0;
            enderecoTextArea.innerHTML = textAcerto + " Desafie a Esfinge novamente clicando em recomeçar.";
    }else {
            let enderecoTextArea = document.getElementById("text4");
            enderecoTextArea.innerHTML = textErro;
            contMortes += 1;
                if(contMortes == 1){
                        document.getElementById("iconLife1").style.visibility="hidden";
                }else if(contMortes == 2) {
                        document.getElementById("iconLife2").style.visibility="hidden";
                }else if(contMortes == 3) {
                        document.getElementById("iconLife3").style.visibility="hidden";
                        let enderecoTextArea = document.getElementById("text4");
                        enderecoTextArea.innerHTML = textPerdeu + " Tente novamente clicando em recomeçar";
                        document.getElementById("valorRevelado").style.visibility = "visible";
                        let enderecoValor = document.getElementById("valorRevelado");
                        enderecoValor.innerHTML = numeroSorteado;
                        document.getElementById("btn_comecar").innerHTML = "Recomeçar!";
                        document.getElementById("text-send").disabled = true;
                        document.getElementById("text-send").style.backgroundColor = "#b32e29";
                        textosMensagens.length = 0;
                        flag = 0;
                        contMortes = 0;
                }
    }


}