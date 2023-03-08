const btn = document.getElementById('btnn obtener')
addEventListener('click', function calcular(){
    var fx0 = Number(document.getElementById('valorFX0').value);
    var fx1 = Number(document.getElementById('valorFX1').value); 
    var x = Number(document.getElementById('valorX').value);
    var x0 = Number(document.getElementById('valorX0').value); 
    var x1 = Number(document.getElementById('valorX1').value);
    var valorVerdadero = Number(document.getElementById('el-resultado').value);
    
    var b1 = (fx0) + ((fx1 - fx0) / (x1 -x0));
    var total = (b1) * (x - x0);
    document.getElementById('el-resultado').innerHTML = total; 

    var error1 = valorVerdadero - total;
    var error2 = error1 / valorVerdadero;
    var error3 = error2 * 100;


    document.getElementById('ErrorPorcentual').innerHTML = error3.toFixed(6);

});

function Limpiar() {
    document.getElementsById('X').reset();
}
