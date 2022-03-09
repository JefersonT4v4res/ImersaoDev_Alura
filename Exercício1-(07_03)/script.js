function ativaDrop() {
   let drop = document.getElementById("dropdown-menu");
   if(drop.style.display == "none") {
       drop.style.display = "block";
   } else {
       drop.style.display = "none";

   }
}

//Vamos do jeito lento mesmo
    var nota1 = parseFloat(window.document.getElementById("mat_nota1").value);
    var nota2 = parseFloat(window.document.getElementById("mat_nota2").value);
    var nota3 = parseFloat(window.document.getElementById("mat_nota3").value);
    var nota4 = parseFloat(window.document.getElementById("mat_nota4").value);
    console.log(nota1);
    console.log(nota2);
    console.log(nota3);
    console.log(nota4);
    if(nota1 <= 10 || nota1 >= 0 &&
         nota2 <= 10 || nota2 >= 0  &&
          nota3 <= 10 || nota3 >= 0  &&
            nota4 <= 10 || nota4 >= 0 ){
                
                var media = (nota1 + nota2 + nota3 + nota4) /4;
                var mediaFN = document.getElementById("mat_MF");
                mediaFN.innerHTML = media.toFixed(1);

                if(media.toFixed(1) >= 6){
                var situacao = document.getElementById("mat_status");
                situacao.innerHTML = "AP";
                } else if(media.toFixed(1) < 6){
                    var situacao = document.getElementById("mat_status");
                    situacao.innerHTML = "RE";
                }

    } else if(nota1 == NaN || nota2 == NaN || nota3 == NaN || nota4 == NaN){
        var mediaFN = document.getElementById("mat_MF");
                mediaFN.innerHTML = "-";
    }else {
        console.log(nota1);
        console.log(nota2);
        console.log(nota3);
        console.log(nota4);
        console.log("A nota inserida não é permitida.")
    }
    
    
    
    var nota1 = parseFloat(window.document.getElementById("port_nota1").value);
    var nota2 = parseFloat(window.document.getElementById("port_nota2").value);
    var nota3 = parseFloat(window.document.getElementById("port_nota3").value);
    var nota4 = parseFloat(window.document.getElementById("port_nota4").value);
         if(nota1 <= 10 || nota1 >= 0 &&
            nota2 <= 10 || nota2 >= 0 &&
            nota3 <= 10 || nota3 >= 0 &&
            nota4 <= 10 || nota4 >= 0 ){
        
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

            } else if(nota1 == NaN || nota2 == NaN || nota3 == NaN || nota4 == NaN){
                var mediaFN = document.getElementById("mat_MF");
                        mediaFN.innerHTML = "-";
            }else {
                console.log("A nota inserida não é permitida.")
            }

    var nota1 = parseFloat(window.document.getElementById("ing_nota1").value);
    var nota2 = parseFloat(window.document.getElementById("ing_nota2").value);
    var nota3 = parseFloat(window.document.getElementById("ing_nota3").value);
    var nota4 = parseFloat(window.document.getElementById("ing_nota4").value);
         if(nota1 <= 10 || nota1 >= 0 &&
            nota2 <= 10 || nota2 >= 0 &&
            nota3 <= 10 || nota3 >= 0 &&
            nota4 <= 10 || nota4 >= 0 ){
        
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
            } else if(nota1 == NaN || nota2 == NaN || nota3 == NaN || nota4 == NaN){
                var mediaFN = document.getElementById("mat_MF");
                        mediaFN.innerHTML = "-";
            }else {
                console.log("A nota inserida não é permitida.")
            }

    var nota1 = parseFloat(window.document.getElementById("geo_nota1").value);
    var nota2 = parseFloat(window.document.getElementById("geo_nota2").value);
    var nota3 = parseFloat(window.document.getElementById("geo_nota3").value);
    var nota4 = parseFloat(window.document.getElementById("geo_nota4").value);
         if(nota1 <= 10 || nota1 >= 0 &&
            nota2 <= 10 || nota2 >= 0 &&
            nota3 <= 10 || nota3 >= 0 &&
            nota4 <= 10 || nota4 >= 0 ){
        
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
            } else if(nota1 == NaN || nota2 == NaN || nota3 == NaN || nota4 == NaN){
                var mediaFN = document.getElementById("mat_MF");
                        mediaFN.innerHTML = "-";
            }else {
                console.log("A nota inserida não é permitida.")
            }

    var nota1 = parseFloat(window.document.getElementById("hist_nota1").value);
    var nota2 = parseFloat(window.document.getElementById("hist_nota2").value);
    var nota3 = parseFloat(window.document.getElementById("hist_nota3").value);
    var nota4 = parseFloat(window.document.getElementById("hist_nota4").value);
         if(nota1 <= 10 || nota1 >= 0 &&
            nota2 <= 10 || nota2 >= 0 &&
            nota3 <= 10 || nota3 >= 0 &&
            nota4 <= 10 || nota4 >= 0 ){
        
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
            } else if(nota1 == NaN || nota2 == NaN || nota3 == NaN || nota4 == NaN){
                var mediaFN = document.getElementById("mat_MF");
                        mediaFN.innerHTML = "-";
            }else {
                console.log("A nota inserida não é permitida.")
            }

    var nota1 = parseFloat(window.document.getElementById("surf_nota1").value);
    var nota2 = parseFloat(window.document.getElementById("surf_nota2").value);
    var nota3 = parseFloat(window.document.getElementById("surf_nota3").value);
    var nota4 = parseFloat(window.document.getElementById("surf_nota4").value);
         if(nota1 <= 10 || nota1 >= 0 &&
            nota2 <= 10 || nota2 >= 0 &&
            nota3 <= 10 || nota3 >= 0 &&
            nota4 <= 10 || nota4 >= 0 ){
        
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
            } else if(nota1 == NaN || nota2 == NaN || nota3 == NaN || nota4 == NaN){
                var mediaFN = document.getElementById("mat_MF");
                        mediaFN.innerHTML = "-";
            }else {
                console.log("A nota inserida não é permitida.")
            }
