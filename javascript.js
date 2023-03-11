const input = document.querySelector("input");

const total = localStorage.getItem("total");
input.value = total;
calcularGanho(input.value);

function calcularGanho(value) {
    const p = document.querySelector("p");
    p.innerText = `ganho total: ${value + 100 - value * 0.2}`;
}

function totalMudou(){
    const value = Number(input.value);
    localStorage.setItem("total", value);
    calcularGanho(value)

    //Salvando informações pós atualização da pagina

}

input.addEventListener("keyup", totalMudou);
