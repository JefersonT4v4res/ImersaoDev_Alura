function ativaDrop() {
   let drop = document.getElementById("dropdown-menu");
   if(drop.style.display == "none") {
       drop.style.display = "block";
   } else {
       drop.style.display = "none";

   }
}


//Vamos do jeito lento mesmo
    var nota1 = parseFloat(window.document.getElementById("mat_nota1").innerHTML);
    var nota2 = parseFloat(window.document.getElementById("mat_nota2").innerHTML);
    var nota3 = parseFloat(window.document.getElementById("mat_nota3").innerHTML);
    var nota4 = parseFloat(window.document.getElementById("mat_nota4").innerHTML);
    var media = (nota1 + nota2 + nota3 + nota4) /4;
    var mediaFN = document.getElementById('mat_MF');
    mediaFN.innerHTML = media.toFixed(1);
        if(media.toFixed(1) >= 6){
        var situacao = document.getElementById('mat_status');
        situacao.innerHTML = "AP";
        } else if(media.toFixed(1) < 6){
            var situacao = document.getElementById('mat_status');
            situacao.innerHTML = "RE";
        }
    
    var nota1 = parseFloat(window.document.getElementById("port_nota1").innerHTML);
    var nota2 = parseFloat(window.document.getElementById("port_nota2").innerHTML);
    var nota3 = parseFloat(window.document.getElementById("port_nota3").innerHTML);
    var nota4 = parseFloat(window.document.getElementById("port_nota4").innerHTML);
    var media = (nota1 + nota2 + nota3 + nota4) /4;
    var mediaFN = document.getElementById('port_MF');
    mediaFN.innerHTML = media.toFixed(1);
    if(media.toFixed(1) >= 6){
        var situacao = document.getElementById('port_status');
        situacao.innerHTML = "AP";
        } else if(media.toFixed(1) < 6){
            var situacao = document.getElementById('port_status');
            situacao.innerHTML = "RE";
        }

    var nota1 = parseFloat(window.document.getElementById("ing_nota1").innerHTML);
    var nota2 = parseFloat(window.document.getElementById("ing_nota2").innerHTML);
    var nota3 = parseFloat(window.document.getElementById("ing_nota3").innerHTML);
    var nota4 = parseFloat(window.document.getElementById("ing_nota4").innerHTML);
    var media = (nota1 + nota2 + nota3 + nota4) /4;
    var mediaFN = document.getElementById('ing_MF');
    mediaFN.innerHTML = media.toFixed(1);
    if(media.toFixed(1) >= 6){
        var situacao = document.getElementById('ing_status');
        situacao.innerHTML = "AP";
        } else if(media.toFixed(1) < 6){
            var situacao = document.getElementById('ing_status');
            situacao.innerHTML = "RE";
        }

    var nota1 = parseFloat(window.document.getElementById("geo_nota1").innerHTML);
    var nota2 = parseFloat(window.document.getElementById("geo_nota2").innerHTML);
    var nota3 = parseFloat(window.document.getElementById("geo_nota3").innerHTML);
    var nota4 = parseFloat(window.document.getElementById("geo_nota4").innerHTML);
    var media = (nota1 + nota2 + nota3 + nota4) /4;
    var mediaFN = document.getElementById('geo_MF');
    mediaFN.innerHTML = media.toFixed(1);
    if(media.toFixed(1) >= 6){
        var situacao = document.getElementById('geo_status');
        situacao.innerHTML = "AP";
        } else if(media.toFixed(1) < 6){
            var situacao = document.getElementById('geo_status');
            situacao.innerHTML = "RE";
        }

    var nota1 = parseFloat(window.document.getElementById("hist_nota1").innerHTML);
    var nota2 = parseFloat(window.document.getElementById("hist_nota2").innerHTML);
    var nota3 = parseFloat(window.document.getElementById("hist_nota3").innerHTML);
    var nota4 = parseFloat(window.document.getElementById("hist_nota4").innerHTML);
    var media = (nota1 + nota2 + nota3 + nota4) /4;
    var mediaFN = document.getElementById('hist_MF');
    mediaFN.innerHTML = media.toFixed(1);
    if(media.toFixed(1) >= 6){
        var situacao = document.getElementById('hist_status');
        situacao.innerHTML = "AP";
        } else if(media.toFixed(1) < 6){
            var situacao = document.getElementById('hist_status');
            situacao.innerHTML = "RE";
        }

    var nota1 = parseFloat(window.document.getElementById("surf_nota1").innerHTML);
    var nota2 = parseFloat(window.document.getElementById("surf_nota2").innerHTML);
    var nota3 = parseFloat(window.document.getElementById("surf_nota3").innerHTML);
    var nota4 = parseFloat(window.document.getElementById("surf_nota4").innerHTML);
    var media = (nota1 + nota2 + nota3 + nota4) /4;
    var mediaFN = document.getElementById('surf_MF');
    mediaFN.innerHTML = media.toFixed(1);
    if(media.toFixed(1) >= 6){
        var situacao = document.getElementById('surf_status');
        situacao.innerHTML = "AP";
        } else if(media.toFixed(1) < 6){
            var situacao = document.getElementById('surf_status');
            situacao.innerHTML = "RE";
        }
