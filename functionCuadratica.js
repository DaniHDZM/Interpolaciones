const btn = document.getElementById('btnn obtener')
addEventListener('click', function calcular(){
const X = parseInt(document.getElementById('valorX').value);
const X0 = parseInt(document.getElementById('valorX0').value);
const X1 = parseInt(document.getElementById('valorX1').value);
const X2 = parseInt(document.getElementById('valorX2').value);
const FX0 = parseInt(document.getElementById('valorFX0').value);
const FX1 = parseInt(document.getElementById('valorFX1').value);
const FX2 = parseInt(document.getElementById('valorFX2').value);
const b0 = FX0;
const b1 = (FX1 - FX0) / (X1 - X0);
const b2 = (((FX2 - FX0) / (X2 - X0)) - ((FX1 - FX0) / (X1 - X0))) / (X2 - X1);

document.getElementById('el-resultado').innerHTML = b0 + (b1 * (X - X0)) + (b2 * ((X - X0) * (X - X1)));
});

function Limpiar() {
    document.getElementsById('X').reset();
}