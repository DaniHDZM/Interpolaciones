const btn = document.getElementById('btnn obtener')
addEventListener('click', function calcular(){
const X = parseInt(document.getElementById('valorX').value);
const X0 = parseInt(document.getElementById('valorX0').value);
const X1 = parseInt(document.getElementById('valorX1').value);
const FX0 = parseInt(document.getElementById('valorFX0').value);
const FX1 = parseInt(document.getElementById('valorFX1').value);
document.getElementById('el-resultado').innerHTML = (FX0 + ((FX1-FX0)/(X1-X0))*(X-X0));

});

function Limpiar() {
    document.getElementsById('X').reset();
}
