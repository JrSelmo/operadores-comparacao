const valorDaCompra = 100;
const numeroDeParcelas = 9;

if (numeroDeParcelas === 1) {

    console.log(`Você vai pagar ${(valorDaCompra * -0.10) + valorDaCompra} reais na compra`)

} else {
    let num = valorDaCompra / numeroDeParcelas
    let formatado = num.toFixed(2);
    console.log(`você deve pagar ${numeroDeParcelas} parcelas de ${formatado} reais`)
}

