function CalculadoraService() {
    const SOMA = '+'
    const SUBTRACAO = '-'
    const DIVISAO = '/'
    const MULTIPLICACAO = '*'


  function calcular(n1, n2, operacao) {
    let resultado;
    switch (operacao) {
      case SOMA:
        resultado = n1 + n2;
        break;
       case SUBTRACAO:
        resultado = n1 - n2;
        break;
      case DIVISAO:
        resultado = n1 / n2;
        break;

      case MULTIPLICACAO:
        resultado = n1 * n2;
        break;

        default:
            resultado = 0;
    }

    return resultado;
  }

  function concatenaNumero(numAtual, numConcat) {
    if(numAtual ==='0' || numAtual === null) {
        numAtual ='';
    }
    if (numConcat === '.' && numAtual ==='') {
        return '0.';
    }

    if (numConcat === '.' && numAtual.indexOf('.') > -1) {
        return numAtual;
    }

    return numAtual + numConcat;
  }
  return [
      calcular,
      concatenaNumero,
      SOMA, 
      SUBTRACAO,
      DIVISAO,
      MULTIPLICACAO
    ];
}

export default CalculadoraService;
