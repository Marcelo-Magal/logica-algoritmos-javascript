function calcularPromocao() {
  // CRIA REFERÊNCIA AOS ELEMENTOS MANIPULADOS PELO PROGRAMA
  // Encontre o elemento HTML com o ID 'inMedicamento' e guarde uma referência
  // a esse elemento na variável chamada 'inMedicamento'.
  let inMedicamento = document.getElementById("inMedicamento");
  let inPreco = document.getElementById("inPreco");
  let outPromocao = document.getElementById("outPromocao");
  let outValor = document.getElementById("outValor");

  // OBTÉM CONTEÚDO DOS CAMPOS DE ENTRADA
  // Pegue o valor que foi digitado no campo do elemento referenciado pela
  // variável 'inMedicamento' e guarde-o na variável chamada 'medicamento'.
  let medimanto = inMedicamento.value;
  // Pegue o valor que foi digitado no campo do elemento referenciado pela
  // variável 'inPreco', converta esse valor para um número e guarde-o na
  // variável chamada 'preco'.
  let preco = Number(inPreco.value);

  // CALCULA VALOR DA PROMOÇÃO
  // Multiplique o valor armazenado na variável 'preco' por 2 e, em seguida,
  // arredonde o resultado para baixo para o número inteiro mais próximo.
  // Guarde esse valor na variável chamada 'valor'.
  let valor = Math.floor(preco * 2);

  // ALTERA O CONTEÚDO DOS PARÁGRAFOS DE RESPOSTA
  // Atualize o conteúdo de texto do elemento referenciado pela variável
  // 'outPromocao' para exibir a string 'Promoção de ' seguida do valor
  // armazenado na variável 'medicamento', usando template strings.
  outPromocao.textContent = `Promoção de ${medimanto}`;
  outValor.textContent = `Leve 2 por apenas R$: ${valor}`;
}

// CRIA UMA REFERÊNCIA AO ELEMENTO (BOTÃO)
// Encontre o elemento HTML que tem o ID 'btMostrar' e guarde uma referência
// a esse elemento na variável chamada 'btMostrar'.
let btMostrar = document.getElementById("btMostrar");
// REGISTRA UM EVENTO ASSOCIADO AO BOTÃO, PARA CARREGAR UMA FUNÇÃO
btMostrar.addEventListener("click", calcularPromocao);
// Adicione um ouvinte de evento ao elemento referenciado pela variável
// 'btMostrar'. O evento a ser ouvido é um clique ('click'). Quando o
// botão for clicado, a
