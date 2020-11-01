# Hello, On8! Hoje é dia de revisão, BB!

Como você está lidando com esse processo de transição? 

Aprender a aprender pode ser muito doloroso, mas eu te garanto uma coisa: é libertador!  🚀

* Vamos começar com um momento só nosso ❤️
* Depois vamos revisar alguns dos conceitos estudados nas últimas semanas: consumo de API
* Teremos bastante treino!
* E de quebra um projetinho guiado massa pra chamar de seu!

---

## Revisão

Essa revisão vai te ajudar a relembrar conceitos e modelos para estabelecer o seu mapa mental de aprendizado! 😃

### HTTP

É o protocolo de transferência de hipertexto. 

O principal protocolo de comunicação entre computadores utilizados na internet.

Ele cria as regras para enviar e receber informações na internet.

Ele é responsável pelo o que acontece por debaixo dos panos quando usamos a internet.

### API

Interface entre aplicativos e programação.

Se uma interface de um sistema é criado para o usuário final, a API é desenvolvida para que um sistema possa usar as funcionalidades de outro sistema.

Interface ideal para que um sistema se comunique com outro sistema.

### REST e RESTful

Rest é uma abstração(forma de usar as regras) do protocolo HTTP para simplificar a construção de um web service, ou seja quem cria uma API com as restrições e regras do modelo Rest está criando na verdade uma API Restful.

O grande objetivo desse modelo é fazer com que os recursos estejam disponíveis através de URLs.

### Verbos ou métodos

Para além de GET e POST, temos também no nosso leque de principais métodos o PUT, DELETE e PATCH.

É simples de entender:

* GET: para consultas
* POST: para criação de recursos
* DELETE: para remoção de recursos
* PUT e PATCH: para atualização de recursos

### Status CODE

Respostas de requisições para ficarmos atentas:

* 1XX informativo <br>
* 2XX sucesso <br>
* 4XX erro de requisição <br>
* 5XX erro de servidor <br>

### DOM
É a árvore de elementos dentro do nosso código HTML. 

É tudo o que o Javascript pode manipular.

>Exemplos: 

* Capturar um botão e escutar o click para executar uma ação
* Capturar div e inserir elementos e/ou atributos
* Capturar elemento e remover o elemento ou os filhos dele
* Capturar elementos para alterar estilo

> Como?

**Capturar elementos:**

document : variável glogal para referenciar a árvore de elementos
getElementById: retorna elemento a partir do id<br>
getElementsByTagName: retorna um vetor/HTMLCollection<br>
getElementsByClassName: retorna um vetor<br>
querySelector: retorna um único elemento <br>
querySelectorAll: retorna uma nodeList<br>

**Criar elementos:**

createElement: cria elemento
setAttribute: insere propriedades
createTextNode: Insere conteúdo
appendChild: identifica elemento pai para o elemento que criamos

**Remover elementos:**

remove()<br>
removeChild()

**Alterar estilos de elementos:**

elemento.style.propriedade = "valor"<br>


### ASSINCRONICIDADE
Você vai num restaurante, pede uma bebida e escolhe a comida. O garçon traz a bebida enquanto a comida ainda não está pronta.
Esse é um processo assíncrono, uma requisição não depende da outra pra obter uma resposta.

### FETCH
A API Fetch fornece o método global fetch() para termos de uma maneira lógica e fácil para buscar recursos de forma assíncrona.


### PROMISE
São promessas que não vão incluenciar na linha de tempo do nosso código.

Elas são funções que devolvem resultados de sucesso ou erro, depois de um tempo.

.then > resolve<br>
.catch > reject

### BÔNUS: AXIOS
Biblioteca AJAX baseada em promises que facilita nossas requisições de forma assíncrona.

*importar antes do script principal*

**Exemplos:**

| Recurso | Descrição |
| --- | --- |
| `/musicas` | A partir do parâmetro ID para escolher uma determinada música, vamos alterar o nome da música usando o PUT|

| Recurso | Descrição |
| --- | --- |
| `/musicas` | A partir de um parâmetro para escolher uma determinada música, usando o PATCH vamos alterar o nome da música|

| Recurso | Descrição |
| --- | --- |
| `/albuns` | A partir de um parâmetro para escolher um determinado album, vamos alterar o dado de name, usando o verbo PUT|

| Recurso | Descrição |
| --- | --- |
| `/albuns` |  A partir de um parâmetro para escolher um determinado album, vamos alterar o dado de name, usando o verbo PATCH|






---
**Desafio:**

#### Calma! É só mais um PROJETINHO GUIADO pra chamar de seu! Já treinamos bastante com nossos exemplos na revisão!


Vamos consumir as APIs do Github e do Giphy para determinar um humor. 

**Esse é o funcionamento esperado, olha que fofo:**
<br>
<br>
  <img src="https://media.giphy.com/media/x7ZzvOlibouBL8QTOt/giphy.gif" alt="Gif Yeah" width="600">
  <br>


#### 📂
> Criamos uma interface onde um input determina um parâmetro para ser filtrado e retorna um usuário do recurso users da API do github.

> Além disso, estamos também listando o recurso gifs da Api do Giphy, filtrando os 25 trending e mostrando um gif na tela de forma randômica. 

> Criamos uma visualização para os dados retornados

#### index.html
>  Uma árvore DOM beeeem simples para o input, o botão e também para renderizar os dados que serão retornados do algoritmo

#### script.js
> APIs:

* https://api.github.com/users/${userGithubValue}

* http://api.giphy.com/v1/gifs/trending?api_key=b46MWywKt5JwuSCnpEa7q9KNRDtPUc02

<BR>

> Algoritmo:
1) assistir o evento de clique do botão submit
2) quando houver clique <br>
  a) recebe o valor do input <br>
  b) passa para a chamada de API do Github <br>
  c) do objeto recebido, pegar somente o nome <br>
  d) inserir esse nome junto com ", seu humor hoje é: " no placeholder <br>
  e) fazer chamada e API do giphy <br>
  f) receber a array <br>
  g) pegar um número aleatório de 0 a 24 <br>
  h) pegar a url da imagem do item escolhido <br>
  i) inserir a url da imagem no src do placeholder <br>



## Simara Conceição
- [instagram](https://www.instagram.com/simara_conceicao)
- [linkedin](https://www.linkedin.com/in/simaraconceicao/)
- [github](https://github.com/simaraconceicao)
- [spotify](https://open.spotify.com/show/59vCz4TY6tPHXW26qJknh3)
- [blog](https://simaraconceicao.com/blog)
- email: contato@simaraconceicao.com
