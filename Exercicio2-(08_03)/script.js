function ativaDrop() {
    let drop = document.getElementById("dropdown-menu");
    if(drop.style.display == "none") {
        drop.style.display = "block";
    } else {
        drop.style.display = "none";
    }
}

function alteraMoeda(x) {
     if(x == '1'){
        let subtitle = document.getElementById("subtitle");
        let title = document.getElementById("title");
        let flag = document.getElementById("flag-initial").src="../_imgs/usa.png";
        let moeda = document.getElementById("usd").innerHTML;
        let init = document.getElementById("initial-coin");
        subtitle.innerHTML = "1 Dólar americano $ hoje"
        title.innerHTML = "5.04 Reais"
        init.innerText = moeda;
     }else if(x == 2) {
        let subtitle = document.getElementById("subtitle");
        let title = document.getElementById("title");
        let flag = document.getElementById("flag-initial").src="../_imgs/canada.png";
        let moeda = document.getElementById("cad").innerHTML;
        let init = document.getElementById("initial-coin");
        subtitle.innerHTML = "1 Dólar canadense C$ hoje"
        title.innerHTML = "3.91 Reais"
        init.innerHTML = moeda;
     }else if(x == 3) {
        let subtitle = document.getElementById("subtitle");
        let title = document.getElementById("title");
        let flag = document.getElementById("flag-initial").src="../_imgs/argentina.png";
        let moeda = document.getElementById("ars").innerHTML;
        let init = document.getElementById("initial-coin");
        subtitle.innerHTML = "1 Peso argentino AR$ hoje"
        title.innerHTML = "0.046 Reais"
        init.innerHTML = moeda;
     }else if(x == 4) {
        let subtitle = document.getElementById("subtitle");
        let title = document.getElementById("title");
        let flag = document.getElementById("flag-initial").src="../_imgs/japan.png";
        let moeda = document.getElementById("jpy").innerHTML;
        let init = document.getElementById("initial-coin");
        subtitle.innerHTML = "1 Yene japonês ¥ hoje"
        title.innerHTML = "0.043 Reais"
        init.innerHTML = moeda;
     }
}

function converteMoeda() {
    let usd = 5.04;
    let cad = 3.91;
    let ars = 0.046;
    let jpy = 0.043;
    let bitcoinUSD = 0.000026;
    let bitcoinCAD = 0.000020;
    let bitcoinARS = 2.400000;
    let bitcoinJPY = 2.200000;

    let moeda = document.getElementById("initial-coin").innerHTML;
    let valorInserido = parseFloat(document.getElementById("valorMoedaInserida").value);
    if (moeda == "USD"){
        let valorConvertidoBRL = usd * valorInserido;
        let resultBrl = document.getElementById("valor-Moeda_brl");
        resultBrl.value = valorConvertidoBRL.toFixed(2);
        let valorConvertidoBitcoin = valorInserido * bitcoinUSD;
        let resultBitcoin = document.getElementById("valor-Moeda_bitcoin");
        resultBitcoin.value = valorConvertidoBitcoin.toFixed(6);

    }else if(moeda == "CAD"){
        let valorConvertidoBRL = cad * valorInserido;
        let resultBrl = document.getElementById("valor-Moeda_brl");
        resultBrl.value = valorConvertidoBRL.toFixed(2);
        let valorConvertidoBitcoin = valorInserido * bitcoinCAD;
        let resultBitcoin = document.getElementById("valor-Moeda_bitcoin");
        resultBitcoin.value = valorConvertidoBitcoin;
    }else if(moeda == "ARS") {
        let valorConvertidoBRL = ars * valorInserido;
        let resultBrl = document.getElementById("valor-Moeda_brl");
        resultBrl.value = valorConvertidoBRL.toFixed(2);
        let valorConvertidoBitcoin = valorInserido * bitcoinARS;
        let resultBitcoin = document.getElementById("valor-Moeda_bitcoin");
        resultBitcoin.value = valorConvertidoBitcoin.toFixed(2);
    }else if(moeda == "JPY") {
        let valorConvertidoBRL = jpy * valorInserido;
        let resultBrl = document.getElementById("valor-Moeda_brl");
        resultBrl.value = valorConvertidoBRL.toFixed(2);
        let valorConvertidoBitcoin = valorInserido * bitcoinJPY;
        let resultBitcoin = document.getElementById("valor-Moeda_bitcoin");
        resultBitcoin.value = valorConvertidoBitcoin;
    }
    
}

function relampagoMarquinhos() {
    let distanciaInserida = document.getElementById("valorKM").value;
    let veloConvertida = distanciaInserida * 1.057000000;
    let resultado = document.getElementById("valorConvertido");
    resultado.innerHTML = (veloConvertida.toFixed(6) + " Anos-luz");
}

function converteGrau() {

    let grau1 = document.getElementById("grau1").value;
    let grau2 = document.getElementById("grau2").value;
    let temperaturaInserida = parseFloat(document.getElementById("inpt-temperatura").value);

    if(grau1 == "Celsius" && grau2 == "Fahrenheit"){
        let resultTemp = (temperaturaInserida * 1.8) + 32;
        let inptResult = document.getElementById("inpt-temperatura_Valor");
        inptResult.value = (resultTemp.toFixed(2) + "°Fahrenheit");
    }else if(grau1 == "Fahrenheit" && grau2 == "Celsius"){
        let resultTemp = (temperaturaInserida - 32) / 1.8;
        let inptResult = document.getElementById("inpt-temperatura_Valor");
        inptResult.value = (resultTemp.toFixed(2) + " °Celsius");
    }else if(grau1 == 'Celsius' && grau2 == "Kelvin") {
        let resultTemp = temperaturaInserida + 273.15;
        let inptResult = document.getElementById("inpt-temperatura_Valor");
        inptResult.value = (resultTemp.toFixed(2) + " Kelvin");
    }else if(grau1 == "Kelvin" && grau2 == "Celsius") {
        let resultTemp = temperaturaInserida - 273.15;
        let inptResult = document.getElementById("inpt-temperatura_Valor");
        inptResult.value = (resultTemp.toFixed(2) + " °Celsius");
    }else if(grau1 == "Kelvin" && grau2 == "Fahrenheit") {
        let resultTemp = (temperaturaInserida - 273.15 ) * 9/5 + 32;
        let inptResult = document.getElementById("inpt-temperatura_Valor");
        inptResult.value = (resultTemp.toFixed(2) + " °Fahrenheit");
    }else if(grau1 == "Fahrenheit" && grau2 == "Kelvin") {
        let resultTemp = (temperaturaInserida - 32 ) * 5/9 + 273.15;
        let inptResult = document.getElementById("inpt-temperatura_Valor");
        inptResult.value = (resultTemp.toFixed(2) + " Kelvin");
    }else if(grau1 == "Celsius" && grau2 == "Celsius") {
        let resultTemp = temperaturaInserida;
        let inptResult = document.getElementById("inpt-temperatura_Valor");
        inptResult.value = (resultTemp.toFixed(2) + " °Celsius");
    }else if(grau1 == "Kelvin" && grau2 == "Kelvin") {
        let resultTemp = temperaturaInserida;
        let inptResult = document.getElementById("inpt-temperatura_Valor");
        inptResult.value = (resultTemp.toFixed(2) + " Kelvin");
    }else if(grau1 == "Fahrenheit" && grau2 == "Fahrenheit") {
        let resultTemp = temperaturaInserida;
        let inptResult = document.getElementById("inpt-temperatura_Valor");
        inptResult.value = (resultTemp.toFixed(2) + " °Fahrenheit");
    }
    
    


}