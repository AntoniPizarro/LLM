paisos = {"nom" : [], "continent" : [], "llengua" : [], "moneda" : []};

function demanarDades(){
    var pais = prompt("Nom del país:");
    if(pais == ""){
        paisos["nom"].push(""); //push = append
    }else{
        paisos["nom"].push(pais);
    }

    var continent = prompt("Nom del continent:");
    if(continent == ""){
        paisos["continent"].push("");
    }else{
        paisos["continent"].push(continent);
    }

    var llengua = prompt("Nom del llenguatge:");
    if(llengua == ""){
        paisos["llengua"].push("");
    }else{
        paisos["llengua"].push(llengua);
    }

    var moneda = prompt("Nom de la moneda:");
    if(moneda == ""){
        paisos["moneda"].push("");
    }else{
        paisos["moneda"].push(moneda);
    }
    
    repetir();
}

function repetir(){
    conf = confirm("Vols introduir un país?");
    if(conf == true){
        demanarDades();
    }else{
        introduir();
    }
}

function introduir(){
    for(i = paisos["nom"].length; i > 0; i--){
        document.writeln("<ul><li>Pais: " + paisos["nom"][i - 1] + "<ul><li>Continent: " + paisos["continent"][i - 1] + "</li><li>LLengua: " + paisos["llengua"][i - 1] + "</li><li>Moneda: " + paisos["moneda"][i - 1] + "</ul></li></li></ul>");
    }
}

demanarDades();