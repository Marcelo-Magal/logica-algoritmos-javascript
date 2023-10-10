function mostrarPromocao() {
  // CRIA REFERÊNCIA AOS ELEMENTOS MANIPULADOS PELO PROGRAMA
  //Encontre o elemento HTML que tem o ID 'inVeiculo' e guarde uma referência a esse
  //elemento na variável chamada 'inVeiculo'."
  let inVeiculo = document.getElementById("inVeiculo");
  let inPreco = document.getElementById("inPreco");
  let outVeiculo = document.getElementById("outVeiculo");
  let outEntrada = document.getElementById("outEntrada");
  let outParcelas = document.getElementById("outParcelas");

  // OBTÉM CONTEÚDO DOS CAMPOS DE ENTRADA
  //Pegue o valor que foi digitado no campo do elemento referenciado pela variável
  //'inVeiculo' e guarde-o na variável chamada 'veiculo'.
  let veiculo = inVeiculo.value;
  //Pegue o valor que foi digitado no campo do elemento referenciado pela variável 
  //'inPreco', converta esse valor para um número e guarde-o na variável chamada 'preco'.
  let preco = Number(inPreco.value);

  // CALCULA VALOR DA ENTRADA E DAS PARCELAS
  let entrada = preco * 0.5;
  let parcela = (preco * 0.5) / 12;

  // ALTERA O CONTEÚDO DOS PARÁGRAFOS DE RESPOSTA
  //Atualize o conteúdo de texto do elemento referenciado pela variável 'outVeiculo' 
  //para exibir a string 'Promoção: ' seguida do valor armazenado na variável 'veiculo'.
  outVeiculo.textContent = "Promoção: " + veiculo;
  //Atualize o conteúdo de texto do elemento referenciado pela variável 'outEntrada' 
  //para exibir a string 'Entrada de R$: ' seguida do valor armazenado na variável 
  //'entrada', arredondado para duas casas decimais.
  outEntrada.textContent = "Entrada de R$: " + entrada.toFixed(2);
  outParcelas.textContent = "+ 12x de R$: " + parcela.toFixed(2);
}
  // cria uma referência ao elemento btVerPromocao (botão): Encontre o elemento HTML que 
  //tem o ID 'btVerPromocao' e guarde uma referência a esse elemento na variável chamada 
  //'btVerPromocao'.
  let btVerPromocao = document.getElementById("btVerPromocao");
  // registra um evento associado ao botão, para carregar uma função: Adicione um ouvinte 
  //de evento ao elemento referenciado pela variável 'btVerPromocao'. O evento a ser 
  //ouvido é um clique ('click'). Quando o botão for clicado, a função 'mostrarPromocao' 
  //será executada.
  btVerPromocao.addEventListener("click", mostrarPromocao);



/* VERSÃO ALTERNATIVA.
function calcularPromocao() {
  //Encontre o elemento HTML que tem o ID 'inVeiculo', pegue o valor que foi digitado
  //nesse campo e guarde-o na variável chamada'veiculo'.
  let veiculo = document.getElementById("inVeiculo").value;

  //Encontre o elemento HTML que tem o ID 'inPreco', pegue o valor que foi digitado
  //nesse campo e guarde-o na variável chamada'preco'.
  let preco = document.getElementById("inPreco").value;

  //Multiplique o valor armazenado na variável 'preco' por 0.5.
  //Guarde o resultado dessa operação na variável chamada 'entrada'.
  let entrada = preco * 0.5;

  //Divida o valor armazenado na variável 'entrada' por 12. Use o método 'toFixed(2)'
  //para arredondar o resultado para duas casas decimais.
  //Guarde o resultado final na variável chamada 'parcela'.
  let parcela = (entrada / 12);

  //Encontre o elemento HTML que tem o ID 'outPromocao'. Atualize o conteúdo de texto
  //desse elemento para exibir a string "Promoção: " seguida do valor armazenado na
  //variável 'veiculo'.
  document.getElementById("outPromocao").textContent = "Promoção: " + veiculo;

  // Encontre o elemento HTML que tem o ID 'outEntrada'. Atualize o conteúdo de texto
  //desse elemento para exibir a string "Entrada de R$: " seguida do valor armazenado
  //na variável 'entrada'.
  document.getElementById("outEntrada").textContent =
    "Entrada de R$: " + entrada.toFixed(2);

  // Encontre o elemento HTML que tem o ID 'outParcelas'. Atualize o conteúdo de texto
  //desse elemento para exibir a string "+ 12x de R$: " seguida do valor armazenado
  //na variável 'parcela'.
  document.getElementById("outParcelas").textContent =
    "+ 12x de R$: " + parcela.toFixed(2);
}

// Encontre o elemento HTML que tem o ID 'btPromocao'.
// Guarde uma referência a esse elemento na variável chamada 'promocao'.
let promocao = document.getElementById("btPromocao");

// Adicione um ouvinte de evento ao elemento armazenado na variável 'promocao'.
// O evento a ser ouvido é um clique ('click').
// Quando o botão for clicado, a função 'calcularPromocao' será executada.
promocao.addEventListener("click", calcularPromocao);
*/