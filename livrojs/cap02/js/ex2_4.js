function calcularPreco() {
  // CRIA REFERÊNCIA AOS ELEMENTOS MANIPULADOS PELO PROGRAMA
  ////Encontre o elemento HTML que tem o ID 'inQuilo' e guarde uma referência a esse
  //elemento na variável chamada 'inQuilo'.
  let inQuilo = document.getElementById("inQuilo");
  let inConsumo = document.getElementById("inConsumo");
  let outValor = document.getElementById("outValor");

  // OBTÉM CONTEÚDO DOS CAMPOS DE ENTRADA
  let quilo = Number(inQuilo.value);
  let consumo = Number(inConsumo.value);

  // CALCULA VALOR DA ENTRADA E DAS PARCELAS
  let valor = quilo * (consumo * 0.001); //let valor = (quilo / 1000) * consumo

  // ALTERA O CONTEÚDO DOS PARÁGRAFOS DE RESPOSTA
  outValor.textContent = `Valor a pagar R$: ${valor.toFixed(2)}`;
}

// cria uma referência ao elemento btCaucular (botão): Encontre o elemento HTML que
//tem o ID 'btCaucular' e guarde uma referência a esse elemento na variável chamada
//'btCaucular'.
let btCalcular = document.getElementById("btCalcular");
// registra um evento associado ao botão, para carregar uma função: Adicione um ouvinte
//de evento ao elemento referenciado pela variável 'btCalcular'. O evento a ser
//ouvido é um clique ('click'). Quando o botão for clicado, a função 'calcularPreco'
//será executada.
btCalcular.addEventListener("click", calcularPreco);
