// cria referência ao form e ao elemento h3 (onde será exibida a resposta)
// Encontre o primeiro elemento HTML que corresponde ao seletor 'form' e
// guarde uma referência a esse elemento na variável constante chamada 'frm'.
const frm = document.querySelector("form");
// Encontre o primeiro elemento HTML que corresponde ao seletor 'h3' e
// guarde uma referência a esse elemento na variável constante chamada 'resp'.
const resp = document.querySelector("h3");

// cria um "ouvinte" de evento, acionado quando o botão submit for clicado:
// Adicione um ouvinte de evento ao elemento referenciado pela variável 'frm'.
// O evento a ser ouvido é o envio do formulário ('submit'). Quando o formulário
// for enviado, a função anônima será executada.
frm.addEventListener("submit", (e) => {
  // obtém conteúdo (e converte em número):
  // Dentro da função, pegue o valor do campo 'inValor' do formulário, converta-o
  // para um número e guarde-o na constante 'valor'.
  const valor = Number(frm.inValor.value);
  // Faça o mesmo para o campo 'inTempo', armazenando o valor na constante 'tempo'.
  const tempo = Number(frm.inTempo.value);

  // Calcule o valor a ser pago. Arredonde o valor de 'tempo' dividido por 15 para
  // cima usando Math.ceil e multiplique pelo valor armazenado em 'valor'. Guarde
  // o resultado na constante 'pagar'.
  const pagar = Math.ceil(tempo / 15) * valor;

  // exibe o valor a pagar (com 2 decimais):
  // Atualize o conteúdo de texto do elemento referenciado por 'resp' para exibir
  // o valor a ser pago, arredondado para duas casas decimais.
  resp.innerText = `Valor a Pagar R$: ${pagar.toFixed(2)}`;

  // Previne o comportamento padrão do evento de envio do formulário.
  e.preventDefault(); // evita envio do form
});
