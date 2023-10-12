//cria referência ao form e aos 2 elementos h3 (onde serão exibidas as respostas):
//Encontre o primeiro elemento HTML que corresponde ao seletor 'form' e
//guarde uma referência a esse elemento na variável constante chamada 'frm'.
const frm = document.querySelector("form");
//Encontre o primeiro elemento HTML que corresponde ao id 'outMedias' e
//guarde uma referência a esse elemento na variável constante chamada 'resp1'.
//O método querySelector utiliza seletores CSS para identificar elementos. No caso de um
//ID, você deve preceder o nome do ID com um caractere de cerquilha (#).
const resp1 = document.querySelector("#outMedias");
//Encontre o primeiro elemento HTML que corresponde ao id 'outSituacao' e
//guarde uma referência a esse elemento na variável constante chamada 'resp2'.
const resp2 = document.querySelector("#outSituacao");

//Primeiro, você quer capturar o evento de "submit" do formulário. Isso é feito para
//que, quando o usuário clicar no botão de enviar (ou pressionar Enter), o código dentro
//da função anônima seja executado.

//Adicione um ouvinte de evento ao elemento de formulário identificado pela
//variável 'frm'. O evento a ser ouvido é o "submit", que é disparado quando o
//formulário é enviado. A função anônima '(e) => {}' será executada quando esse
//evento ocorrer.
frm.addEventListener("submit", (e) => {
  //Aqui, você quer saber qual o nome do aluno que vamos passar as notas. Você pega esse
  //valor do campo de entrada inNome e o armazena na constante nome.
  //Cria uma constante chamada 'nome' e armazena o valor do campo de entrada
  //que tem a id 'inNome' no formulário identificado pela variável 'frm'.
  //Isso permite capturar o que o usuário digitou nesse campo específico.
  const nome = frm.inNome.value;
  //Você também precisa saber as notas do aluno. O valor é convertido para um número
  //para permitir cálculos matemáticos.Cria uma constante chamada 'nota1' e armazena o
  //valor do campo de entrada que tem a id 'inNota1' no formulário identificado pela variável
  //'frm'. O valor é convertido para um número usando o construtor 'Number', permitindo
  //que cálculos matemáticos sejam realizados com esse valor posteriormente.
  const nota1 = Number(frm.inNota1.value);
  const nota2 = Number(frm.inNota2.value);

  // calcula valores:
  const media = (nota1 + nota2) / 2;

  resp1.innerText = `Média das Notas: ${media}`;

  if (media >= 7) {
    resp2.innerText = `Parabéns ${nome}! Você foi aprovado(a)`;
  } else {
    resp2.innerText = `Ops ${nome}... Você foi reprovado(a)`;
  }

  e.preventDefault();

})
