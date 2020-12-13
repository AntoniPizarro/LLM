function sumar(num){
    let resultat = 0;
    for (i = 0; i < 10; i++){
        resultat += parseInt(num[i]);
    }
    alert("La suma es " + resultat);
}

function multiplicar(num){
    let resultat = 1;
    for (i = 0; i < 10; i++){
        resultat *= parseInt(num[i]);
    }
    alert("La multiplicació es " + resultat);
}

function demanarSuma(numero){
    let accio = confirm("Vols fer la suma?");
    if(accio == true){
        sumar(numero);
    }else{
        demanarMultiplicacio(numero);
    }
}

function demanarMultiplicacio(numero){
    let accio = confirm("Vols fer la multiplicar?");
    if(accio == true){
        multiplicar(numero);
    }else{
        demanarSuma(numero);
    }
    
}

var numeros = prompt("Escriu 10 números separats per comes:");
numeros = numeros.split(",");

demanarSuma(numeros);