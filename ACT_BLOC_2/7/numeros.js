var numeros = prompt("Escriu 10 numeros separats per comes:");
var numeros = numeros.split(",");

function sumar(num){
    let resultat = 0;
    for (n in num){
        resultat += parseInt(n);
    }
    alert("La suma es " + resultat);
}

function multiplicar(num){
    let resultat = 1;
    for (n in num){
        resultat *= parseInt(n);
    }
    alert("La multiplicació es " + resultat);
}

function demanarSuma(){
    let accio = confirm("Vols fer la suma?");
    if(accio == true){
        sumar(numeros);
    }else{
        dmanarMultiplicacio();
    }
}

function dmanarMultiplicacio(){
    let accio = confirm("Vols fer la multiplicar?");
    if(accio == true){
        multiplicar(numeros);
    }else{
        demanarSuma();
    }
    
}

demanarSuma();