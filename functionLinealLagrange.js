const btn = document.getElementById('btnn obtener')
addEventListener('click', function calcular(){
    var x = Number(document.getElementById('valorX').value);
    var x0 = Number(document.getElementById('valorX0').value); 
    var x1 = Number(document.getElementById('valorX1').value);
    var fx0 = Number(document.getElementById('valorFX0').value);
    var fx1 = Number(document.getElementById('valorFX1').value);
    

    var parteOne = ((fx0) * ((x - x1) / (x0 - x1)));
    var parteTwo = ((fx1) * ((x - x0) / (x1 - x0)));
    let lagrangePrim = parteOne + parteTwo;

document.getElementById('el-resultado').innerHTML = lagrangePrim
});

function Limpiar() {
    document.getElementsById('X').reset();
}
