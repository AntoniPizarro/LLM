var texte = prompt("Esciu un texte:");
var arrayParaules = texte.split(" ");
alert("Nombre de paraules: " + arrayParaules.length + " Primera paraula: " + arrayParaules[0] + " Darrera paraula: " + arrayParaules[(arrayParaules.length - 1)] + " Paraules ordenades: " + arrayParaules.reverse());