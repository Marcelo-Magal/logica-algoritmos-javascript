// declara a função mostrarOla
function mostrarOla() {
  /*você está dizendo: "Encontre o elemento HTML que tem o ID 'nome', pegue o valor
  que foi digitado nesse campo e guarde-o na variável chamada 'nome'."*/
  let nome = document.getElementById("nome").value;
  /*você está dizendo: "Encontre o elemento HTML que tem o ID 'resposta' e mude o texto
  dentro dele para ser 'Olá ' seguido do valor que está na variável `nome`."*/
  document.getElementById("resposta").textContent = "Olá " + nome;
}

/*você está dizendo: "Encontre o elemento HTML que tem o ID 'mostrar' e guarde uma 
referência para esse elemento na variável chamada 'mostrar'."*/
let mostrar = document.getElementById("mostrar");
/*você está dizendo: "Quando o elemento HTML que está na variável mostrar
for clicado, execute a função mostrarOla."*/
mostrar.addEventListener("click", mostrarOla);


/*

1. **`function mostrarOla() {`**: Esta linha define uma função chamada `mostrarOla`.
   A função será responsável por pegar o valor do campo de entrada e exibir uma saudação.

2. **`let nome = document.getElementById("nome").value;`**: Esta linha faz várias coisas:
    - `document.getElementById("nome")`: Procura um elemento HTML com o ID "nome".
    - `.value`: Obtém o valor atual desse elemento.
      Obs: o `.value` é usado para pegar o que foi digitado em um campo de entrada 
      (input) no HTML. Por exemplo, se você tem um campo de entrada para um nome e alguém
      digita "João", o `.value` vai pegar esse "João" para que você possa usá-lo no seu 
      código JavaScript. Então, na linha `let nome = document.getElementById("nome").value;`,
      o `.value` está pegando o texto que foi digitado no campo com o ID "nome" e armazenando
      esse texto na variável `nome`.
    - `let nome = ...`: Armazena esse valor na variável `nome`.

3. **`document.getElementById("resposta").textContent = "Olá " + nome;`**: 
    - `document.getElementById("resposta")`: Procura um elemento HTML com o ID "resposta".
    - `.textContent = "Olá " + nome;`: Define o conteúdo de texto desse elemento para ser 
      "Olá " seguido do nome que foi obtido.
      Obs: o `.textContent` é uma forma de mudar ou pegar o texto que está dentro de um 
      elemento HTML. Ele não leva em conta o HTML dentro do elemento, apenas o texto puro.
      Por exemplo, se você tem um parágrafo no HTML assim: `<p id="resposta">Oi</p>`, você
       pode usar `.textContent` para mudar o "Oi" para outra coisa. Na linha 
       `document.getElementById("resposta").textContent = "Olá " + nome;`, o `.textContent`
       está colocando a palavra "Olá" mais o nome que foi digitado, tudo isso dentro do 
       elemento com o ID "resposta".

4. **`}`**: Fecha a função `mostrarOla`.

5. **`var mostrar = document.getElementById("mostrar");`**: 
    - `document.getElementById("mostrar")`: Procura um elemento HTML com o ID "mostrar".
    - `var mostrar = ...`: Armazena esse elemento na variável `mostrar`.

6. **`mostrar.addEventListener("click", mostrarOla);`**: 
    - `addEventListener`: Este é um método que permite que você diga ao navegador para 
      "escutar" um certo tipo de evento em um elemento HTML.
    - `"click"`: Este é o tipo de evento que o navegador deve escutar. Neste caso, é um
       clique do mouse.
    - `mostrarOla`: Esta é a função que será chamada quando o evento de clique acontecer.
    Obs: o mostrar aqui é o mostrar que está armazenando o elemento HTML que tem o ID "mostrar".
    Então, quando você adiciona um ouvinte de evento com mostrar.addEventListener("click",
    mostrarOla);, você está dizendo: "Quando o elemento HTML que está na variável mostrar
    for clicado, execute a função mostrarOla."
*/