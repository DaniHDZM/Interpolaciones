const btn = document.getElementById('btnn obtener')
addEventListener('click', function calcular(){
    var x = Number(document.getElementById('valorX').value);
    var x0 = Number(document.getElementById('valorX0').value); 
    var x1 = Number(document.getElementById('valorX1').value);
    var x2 = Number(document.getElementById('valorX2').value);
    var fx0 = Number(document.getElementById('valorFX0').value);
    var fx1 = Number(document.getElementById('valorFX1').value); 
    var fx2 = Number(document.getElementById('valorFX2').value); 
    
    
    var partOne = ((fx0) * ((x - x1) * (x - x2)) / ((x0 - x1) * (x0 - x2)));
    var partTwo = ((fx1) * ((x - x0) * (x - x2)) / ((x1 - x0) * (x1 - x2)));
    var partThree = ((fx2) * ((x - x0) * (x -x1)) / ((x2 - x0) * (x2 - x1)));
    var totalLagraSegGra = partOne + partTwo + partThree;

document.getElementById('el-resultado').innerHTML = totalLagraSegGra
});


function Limpiar() {
    document.getElementsById('X').reset();
}
//