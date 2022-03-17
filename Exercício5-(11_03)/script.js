var imgPolaroid = [];
var subtitle = [];
var i = 0;

function capturarInformacoes(){
    let imgValue = document.getElementById("link-img").value;
    let subtitleValue = document.getElementById("subtitle-img").value;
    if(imgPolaroid.includes(imgValue) != true){ 
        imgPolaroid.push(imgValue);
        subtitle.push(subtitleValue);
        gerarPolaroid();  
    }else {
        document.getElementById("link-img").value = "";
        document.getElementById("subtitle-img").value = "";
        alert("O link da imagem que você está tentando inserir já foi utilizada.");
    }
}

function gerarPolaroid() {
    const divPrincipal = "<div class=final-result>";
    const divImg = "<div class=img-area>";
    const novaImg = "<img src=" + imgPolaroid[i] + ">";
    const divSubtitle = "<div class=subtitle-area>";
    const novoSubtitle = "<p>" + subtitle[i] + "</p>";
    let div = document.getElementById("polaroitResult");
    div.insertAdjacentHTML("beforeend", divPrincipal + divImg + novaImg + divSubtitle + novoSubtitle);
    i++;
 
}

