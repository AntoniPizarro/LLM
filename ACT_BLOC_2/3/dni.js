var lletres = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];
var dni = prompt("DENI sense lletra:");
if (parseInt(dni) >= 1 && parseInt(dni) <= 99999999){
    alert(dni + lletres[parseInt(dni) % 23]);
}