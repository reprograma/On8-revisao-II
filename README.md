# Hello, On8! Hoje é dia de revisão, BB!

Como você está lidando com esse processo de transição? 

Aprender a aprender pode ser muito doloroso, mas eu te garanto uma coisa: é libertador!  🚀

* Vamos começar com um momento só nosso ❤️ 20min
* Depois vamos revisar alguns dos conceitos estudados nas últimas semanas: consumo de API 30min
* Intervalo 10min
* Teremos bastante treino!1h20min
* Intervalo 10min
* E de quebra um projetinho guiado massa pra chamar de seu! 1h30min

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


### Alguns padrões e sintaxes de Javascript

Você precisa aprender 7 conceitos fundamentais: variáveis, tipos, desestruturação de dados, recuperação de dados (principalmente objetos, arrays e arrays like), funcões, operadores, condicionais, fetch api(promises) e eventos.

 Agora, você precisa aprender a sintaxe(como escrever cada coisa), depois você precisa trazer seu modo de pensar para execuções dentro do seu projeto, dê um passo de cada vez e de repente você tem uma aplicação inteirinha pra chamar de sua. Esse passo não vai ser rápido



### ASSINCRONICIDADE
Exemplo: Você vai num restaurante, escolhe a comida e escolhe uma bebida. O garçon traz a bebida antes enquanto a comida ainda não está pronta.
Esse é um processo assíncrono, a segunda requisição não depende da primeira ser executada antes pra obter uma resposta.


### FETCH
A API Fetch fornece o método global fetch() para termos de uma maneira lógica e fácil para buscar recursos de forma assíncrona.


### PROMISE
São promessas que não vão incluenciar na linha de tempo do nosso código.

Elas são funções que devolvem resultados de sucesso ou erro, depois de um tempo.

.then > resolve<br>
.catch > reject

### ASYNC/AWAIT

A partir do ES8 e surgiu para resolver o problema de aninhamento de thens. 

É simples: primeiro definimos uma função que precisa ser async e dentro do bloco de execução devemos colocar o await.


### BÔNUS: AXIOS
Biblioteca AJAX baseada em promises que facilita nossas requisições de forma assíncrona.

> *sempre importar o axios antes do script principal*

**Exemplos:**

| Recurso | Descrição |
| --- | --- |
| `/db` |Usando fetch e promise(then), liste os dados do recurso no console|

| Recurso | Descrição |
| --- | --- |
| `/css` | Usando fetch e promise(then e catch), liste os dados do recurso no console e depois renderize como uma lista de titulos.|

| Recurso | Descrição |
| --- | --- |
| `/html` |  Usando fetch e promise, liste os dados do recurso no console e depois renderize como como um grupo de cards com a imagem e o titulo.|

| Recurso | Descrição |
| --- | --- |
| `/logica` |  Usando fetch e promise, liste os dados do recurso no console e depois renderize como como um grupo de cards com a imagem e o titulo.|

| Recurso | Descrição |
| --- | --- |
| `/javascript` | Usando axios e async/await, liste os dados do recurso renderizando como um grupo de cards com a imagem e o titulo.|



---
**Desafio:**

#### Calma! É só mais um PROJETINHO GUIADO pra chamar de seu! Já treinamos bastante com nossos exemplos na revisão!


Vamos consumir as APIs do Github e do Giphy para determinar um humor. 

**Esse é o funcionamento esperado, olha que fofo:**
<br>
<br>
  <img src="https://media.giphy.com/media/G0tZPazVjHh061NpyO/giphy.gif" alt="Gif Yeah" width="600">
  <br>


#### 📂
> Criamos uma interface onde um input determina um parâmetro para ser filtrado e retorna um usuário do recurso users da API do github.

> Além disso, estamos também listando o recurso gifs da Api do Giphy, filtrando os 50 trending e mostrando um gif na tela de forma randômica. 

> Criamos uma visualização para os dados retornados

#### index.html
>  Uma árvore DOM beeeem simples para o input, o botão e também para renderizar os dados que serão retornados do algoritmo

#### script.js
> APIs:

* https://api.github.com/users/${userGithubValue}

* http://api.giphy.com/v1/gifs/trending?api_key=b46MWywKt5JwuSCnpEa7q9KNRDtPUc02

<BR>

> Algoritmo:
1) capturar elementos do HTML
2) assistir o evento de clique do botão
3) quando houver clique <br>
  a) previne o comportamento padrão do navegador<br>
  b) pega o valor do input<br>
  c) passa para a chamada de API do Github e do objeto recebido, pegar somente o nome<br>
  d) inserir esse nome junto com ", seu humor hoje é: " no resultado <br>
  e) fazer chamada e API do giphy <br>
  f) receber a array <br>
  g) reduzir os indices a um indice aleatório da array <br>
  h) pegar a url da imagem do item sorteado <br>
  i) criar imagem e inserir a url da imagem no <br>



## Simara Conceição
- [instagram](https://www.instagram.com/simara_conceicao)
- [linkedin](https://www.linkedin.com/in/simaraconceicao/)
- [github](https://github.com/simaraconceicao)
- [spotify](https://open.spotify.com/show/59vCz4TY6tPHXW26qJknh3)
- [quero ser dev](https://queroserdev.com)
- email: contato@simaraconceicao.com
