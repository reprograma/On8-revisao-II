//https://my-json-server.typicode.com/simaraconceicao/base-minuto/html

const cardGroup = document.getElementById("cards-group")
const card = document.getElementById('card')

fetch('https://my-json-server.typicode.com/simaraconceicao/base-minuto/html')
    .then(response => response.json())
    .then(object => {
        console.log(object)

        return object.map(({title, img}) => {
            let texto = document.createElement('h2')
            texto.innerHTML = `${title}`
            texto.setAttribute('class', 'titulo')
            card.appendChild(texto)

            let imagem = document.createElement('img')
            imagem.setAttribute('src', `${img}`)
            imagem.setAttribute('alt', 'gif da Issa Rae')
            card.appendChild(imagem)

            

        })
    })
    .catch(err =>{
        console.log("errouuuuuu")
    })

   