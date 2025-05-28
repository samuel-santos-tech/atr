function calcular() {
    const horas = Number(document.getElementById('horas'));
    const valorHora = Number(document.getElementById('valorHoras'))
    let resultado = '';
}

function calcularPagamento() {
    const total = horas * valorHora;
    
    resultado = `Total a receber: R$${total}`;

    document.getElementById('resultado').innerHTML = resultado

    
    
    
}