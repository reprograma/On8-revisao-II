//https://my-json-server.typicode.com/simaraconceicao/base-minuto/css

let ul = document.getElementById('lista')

fetch('https://my-json-server.typicode.com/simaraconceicao/base-minuto/css')
    .then(response => response.json())
    .then(data => {
        console.log(data)

        return data.map(item =>{
            let li = document.createElement('li')            
            li.innerHTML = `${item.title}`
            ul.appendChild(li)
        })
    })
    .catch(err =>{
        console.warn('deu ruim!')
    })

    