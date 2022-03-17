//Definindo variáveis.
let imgPolaroid = [];
let subtitle = [];
let iterador = 0;
const trechoHtml = [];
let wantedId;
const divImg = "<div class=img-area>";
const divSubtitle = "<div class=subtitle-area>";

function capturarInformacoes(){
    let imgValue = document.getElementById("link-img").value;
    let subtitleValue = document.getElementById("subtitle-img").value;

        if(imgValue == false){  
            alert("Uma polaroid precisa de uma imagem.");
        }else if(imgPolaroid.includes(imgValue) == false){
            let divContainer = "<div id=" + iterador + " onclick=selecionarPolaroid(" + iterador + ") class=final-result>";
            imgPolaroid.push(imgValue);
            subtitle.push(subtitleValue);
            let polaroid = gerarPolaroid(iterador, divContainer); 
            document.getElementById("polaroitResult").insertAdjacentHTML("beforeend", polaroid);
            iterador ++; 
        }else {
            alert("O link da imagem que você está tentando inserir já foi utilizada.");
        }
    document.getElementById("link-img").value = "";
    document.getElementById("subtitle-img").value = "";
}

function gerarPolaroid(x, divPrincipal) {
    const novaImg = "<img src=" + imgPolaroid[x] + ">";
    const novoSubtitle = "<p>" + subtitle[x] + "</p>";
    trechoHtml[x] = divPrincipal + divImg + novaImg + divSubtitle + novoSubtitle;
    return trechoHtml[x];
}

function selecionarPolaroid(flag) {
    wantedId = flag;
    const divAlterada = "<div id=" + iterador + " class=final-result>";

    console.log("Qual Id selecionado? " + flag);
    document.getElementById("sectionSelected").style.display = "flex";
    for(let x = 0; x < imgPolaroid.length; x++){
        document.getElementById("" + x).style.pointerEvents = "none";
    }
    
    let polaroid = gerarPolaroid(flag, divAlterada);
    document.getElementById("containerArea").insertAdjacentHTML("beforeend", polaroid);
}

function queimarPolaroid() {
    let result = confirm("Você está prestes a deletar uma lembrança, tem certeza que irá apagar esse momento?");
    
    if(result == true){
        imgPolaroid.splice(wantedId, 1);
        subtitle.splice(wantedId, 1);
        
        //Apaga
        let enderecoDiv = document.getElementById("polaroitResult");
        while(enderecoDiv.firstChild){
            enderecoDiv.removeChild(enderecoDiv.firstChild);
        }
        let enderecoDescarte = document.getElementById("containerArea");
        while(enderecoDescarte.firstChild){
            enderecoDescarte.removeChild(enderecoDescarte.firstChild);
        }
        
        //Atualiza
        for(iterador = 0; iterador < imgPolaroid.length; iterador++){
            const divContainer = "<div id=" + iterador + " onclick=selecionarPolaroid(" + iterador + ") class=final-result>";
            let polaroid = gerarPolaroid(iterador, divContainer);
            document.getElementById("polaroitResult").insertAdjacentHTML("beforeend", polaroid);
            enderecoDiv = document.getElementById("" + iterador).style.pointerEvents = "auto";
        }
        document.getElementById("sectionSelected").style.display = "none";

    }
    
}

document.getElementById("close-section").addEventListener("click", close);

function close() {
    document.getElementById("sectionSelected").style.display = "none";
    let enderecoDiv = document.getElementById("polaroitResult");
    let enderecoDescarte = document.getElementById("containerArea");
        while(enderecoDescarte.firstChild){
            enderecoDescarte.removeChild(enderecoDescarte.firstChild);
        }
        for(let x = 0; x < imgPolaroid.length; x++){
            enderecoDiv = document.getElementById("" + x).style.pointerEvents = "auto";
        }
}