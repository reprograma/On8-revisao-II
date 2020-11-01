//http://my-json-server.typicode.com/simaraconceicao/base-minuto/logica

const card1 = document.getElementById("card1")
const card0 = document.getElementById("card0")

fetch('http://my-json-server.typicode.com/simaraconceicao/base-minuto/logica')
    .then(resposta => resposta.json())
    .then(data => {
        console.log(data)

        return data.map(({id, title, description, img , url})=>{
            let h2 = document.createElement('h2')
            h2.innerHTML = `${title}`
            card0.appendChild(h2)

            let p = document.createElement('p')
            p.innerHTML = `${description}`
            card0.appendChild(p)

            let imagem = document.createElement('img')
            imagem.setAttribute('src',`${img}`)
            imagem.setAttribute('alt','gif engraçados')
            card0.appendChild(imagem)


        })
    })
    .catch(err => {
        alert("algo de errado que não está certo")
    })
    

