//https://my-json-server.typicode.com/simaraconceicao/base-sabedoria/javascript

let card = document.getElementById('card')

const renderContent = async ()=>{
    try{
        let response = await axios.get("https://my-json-server.typicode.com/simaraconceicao/base-sabedoria/javascript")
        let dados = await response.data

        return dados.map(item =>{
            let titulo = document.createElement('h2')
            titulo.innerHTML = `${item.title}`
            card.appendChild(titulo)

            let imagem = document.createElement('img')
            imagem.setAttribute('src',`${item.img}` )
            card.appendChild(imagem)
        })
    }catch{
        console.warn("deu erro")
    }
}

renderContent()