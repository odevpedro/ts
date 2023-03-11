var input = document.querySelector("input");
var total = localStorage.getItem("total");
if (input && total) {
    input.value = total;
    calcularGanho(Number(input.value));
}
function calcularGanho(value) {
    var p = document.querySelector("p");
    if (p) {
        p.innerText = "ganho total: ".concat(value + 100 - value * 0.2);
    }
}
function totalMudou() {
    if (input) {
        localStorage.setItem("total", input.value);
        calcularGanho(Number(input.value));
    }
    //Salvando informações pós atualização da pagina
}
if (input) {
    input.addEventListener("keyup", totalMudou);
}
