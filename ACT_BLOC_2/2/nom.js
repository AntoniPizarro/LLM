var nom = prompt("Nom d'usuari:");
var confirmacio = confirm("Confirmat");
if (confirmacio == true){
    alert("Nom enregistrat (" + nom + ")");
}else{
    alert("Nom no enregistrat (" + nom + ")");
}