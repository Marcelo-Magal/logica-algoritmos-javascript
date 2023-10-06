function converterDuracao() {
  //Encontre o elemento HTML que tem o ID 'inTitulo', pegue o valor que foi digitado
  //nesse campo e guarde-o na variável chamada'titulo'.
  let titulo = document.getElementById("inTitulo").value;

  //Encontre o elemento HTML que tem o ID 'inDuracao', pegue o valor que foi digitado
  //nesse campo e guarde-o na variável chamada'duracao'.
  let duracao = document.getElementById("inDuracao").value;

  //Divida o valor armazenado na variável 'duracao' por 60 e, em seguida, arredonde
  //o resultado para baixo e para o número inteiro mais próximo. Guarde esse valor na
  //variável chamada 'convertidoHr'.
  let horas = Math.floor(duracao / 60);

  //Utilize o operador de módulo (%) para encontrar o resto da divisão do valor
  //armazenado na variável 'duracao' por 60. Guarde esse valor na variável chamada
  //'minutos'.
  let minutos = duracao % 60;

  //Encontre o elemento HTML que tem o ID 'outResposta'. Atualize o conteúdo de texto
  //desse elemento para exibir o valor da variável 'horas', seguido da string " hora(s)
  //e ", e então o valor da variável 'minutos', seguido da string " min".
  document.getElementById("outResposta").textContent =
    horas + " hora(s) e " + minutos + " min";

  //Encontre o elemento HTML que tem o ID 'outTitulo'. Atualize o conteúdo de texto
  //desse elemento com o valor armazenado na variável 'titulo'.
  document.getElementById("outTitulo").textContent = titulo;
}

// Encontre o elemento HTML que tem o ID 'btConverter'.
// Guarde uma referência a esse elemento na variável chamada 'converter'.
let converter = document.getElementById("btConverter");

// Adicione um ouvinte de evento ao elemento armazenado na variável 'converter'.
// O evento a ser ouvido é um clique ('click').
// Quando o botão for clicado, a função 'converterDuracao' será executada.
converter.addEventListener("click", converterDuracao);
