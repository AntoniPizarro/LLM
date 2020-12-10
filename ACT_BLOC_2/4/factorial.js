function demanarFactorial(){
    let factorial = parseInt(prompt("Nombre factorial:"));
    let resultat = 1;
    for(i = factorial; i > 0; i--){
        resultat *= i;
    }
    alert("Factorial de " + factorial + ": " + resultat);
    demanar();
}
function demanar(){
    let demanar = confirm("Vols calcular un factorial?");
    if(demanar == true){
        demanarFactorial();
    }
}
demanar();