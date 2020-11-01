//https://my-json-server.typicode.com/simaraconceicao/base-minuto/db

fetch('https://my-json-server.typicode.com/simaraconceicao/base-minuto/db')
    .then(resposta => resposta.json())
    .then(dados =>{
        console.log(dados)
    })
