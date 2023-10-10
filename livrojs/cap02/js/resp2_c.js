//cria referência ao form e aos 2 elementos h3 (onde serão exibidas as respostas):
//Encontre o primeiro elemento HTML que corresponde ao seletor 'form' e
//guarde uma referência a esse elemento na variável constante chamada 'frm'.
const frm = document.querySelector("form");
//Encontre o primeiro elemento HTML que corresponde ao id 'outPromocao' e
//guarde uma referência a esse elemento na variável constante chamada 'resp1'.
//O método querySelector utiliza seletores CSS para identificar elementos. No caso de um
//ID, você deve preceder o nome do ID com um caractere de cerquilha (#).
const resp1 = document.querySelector("#outPromocao");
//Encontre o primeiro elemento HTML que corresponde ao id 'outPrecoTerceiro' e
//guarde uma referência a esse elemento na variável constante chamada 'resp2'.
const resp2 = document.querySelector("#outPreco3Produto");

//Primeiro, você quer capturar o evento de "submit" do formulário. Isso é feito para
//que, quando o usuário clicar no botão de enviar (ou pressionar Enter), o código dentro
//da função anônima seja executado.

//Adicione um ouvinte de evento ao elemento de formulário identificado pela
//variável 'frm'. O evento a ser ouvido é o "submit", que é disparado quando o
//formulário é enviado. A função anônima '(e) => {}' será executada quando esse
//evento ocorrer.
frm.addEventListener("submit", (e) => {
  //Aqui, você quer saber qual produto o usuário está interessado. Você pega esse valor
  //do campo de entrada inProduto e o armazena na constante produto.
  //Cria uma constante chamada 'produto' e armazena o valor do campo de entrada
  //que tem a id 'inProduto' no formulário identificado pela variável 'frm'.
  //Isso permite capturar o que o usuário digitou nesse campo específico.
  const produto = frm.inProduto.value;
  //Você também precisa saber o preço do produto. O valor é convertido para um número
  //para permitir cálculos matemáticos.
  //Cria uma constante chamada 'preco' e armazena o valor do campo de entrada
  //que tem a id 'inPreco' no formulário identificado pela variável 'frm'.
  //O valor é convertido para um número usando o construtor 'Number', permitindo
  //que cálculos matemáticos sejam realizados com esse valor posteriormente.
  const preco = Number(frm.inPreco.value);

  // calcula valores
  const terceiro = preco * 0.5;
  const total = preco * 2 + terceiro;

  //Exibir resposta:
  //Atualiza o conteúdo de texto do elemento HTML identificado pela variável
  //'resp1'. Utiliza template strings para inserir dinamicamente o nome do
  //produto e o preço total da promoção. O método 'toFixed(2)' é usado para
  //formatar o preço com duas casas decimais.
  resp1.innerText = `${produto} - Promoção: Leve 3 por R$: ${total.toFixed(2)}`;
  resp2.innerText = `O 3° Produto custa apenas R$: ${terceiro.toFixed(2)}`;

  e.preventDefault();
});
