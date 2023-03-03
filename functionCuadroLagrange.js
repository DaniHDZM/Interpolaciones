const btn = document.getElementById('btnn obtener')
addEventListener('click', function calcular(){
const X = parseInt(document.getElementById('valorX').value);
const X0 = parseInt(document.getElementById('valorX0').value);
const X1 = parseInt(document.getElementById('valorX1').value);
const X2 = parseInt(document.getElementById('valorX2').value);
const FX0 = parseInt(document.getElementById('valorFX0').value);
const FX1 = parseInt(document.getElementById('valorFX1').value);
const FX2 = parseInt(document.getElementById('valorFX2').value);
let cero=((X-X1)/(X0-X1))*((X-X2)/(X0-X2)) *FX0;
let uno= ((X-X0)/(X1-X0))*((X-X2)/(X1-X2)) *FX1;
let dos= ((X-X0)/(X2-X0))*((X-X1)/(X2-X1)) *FX2;

document.getElementById('el-resultado').innerHTML = cero+uno+dos;
});


function Limpiar() {
    document.getElementsById('X').reset();
}
//