
var jugDor = document.getElementById('imgJugador');
var jugCPU = document.getElementById('imgCPU');
var noms = ["piedra", "papel", "tijera"];
var resulat = document.getElementById('resultado');

var ganadas = 0;
var perdidas = 0;
var empates = 0;
var partidas = 0;

var contPartidas = document.getElementById('resPartidas');
var contGanadas = document.getElementById('resGanadas');
var contPerdidas = document.getElementById('resPerdidas');
var contEmpates = document.getElementById('resEmpates');

function tirada(elegido) {
    jugDor.src = "img/" + elegido + ".png";
    juega(elegido);
}

function juega(jugStr) {
    var cpuIndex = Math.floor(Math.random() * 3);
    var cpuStr = noms[cpuIndex];
    jugCPU.src = "img/" + cpuStr + ".png";
    calculado(jugStr, cpuStr);
}

function calculado(jug, cpu) {
    partidas++;
    contPartidas.innerHTML = + partidas;
    if (jug === cpu) {
        resulat.innerHTML = "Empate";
        empates++;
        contEmpates.innerHTML = + empates;

    } else if (
        (jug === "piedra" && cpu === "tijera") ||
        (jug === "papel" && cpu === "piedra") ||
        (jug === "tijera" && cpu === "papel")
    ){
        resulat.innerHTML = "Tu has ganado";
        ganadas++;
        contGanadas.innerHTML = + ganadas;
} else {
    resulat.innerHTML = "CPU ha ganado";
    perdidas++;
    contPerdidas.innerHTML = + perdidas;
}


}

function reset() {
    partidas = ganadas = perdidas = empates = 0;
    contEmpates.innerHTML = 0;
    contGanadas.innerHTML = 0;
    contPartidas.innerHTML = 0;
    contPerdidas.innerHTML = 0;

    resulat.innerHTML = "Nueva Partida"

}