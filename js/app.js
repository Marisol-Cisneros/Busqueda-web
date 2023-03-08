const Llamada = document.getElementById('llamada')
const Busqueda = document.getElementById('busqueda').content
const fragment = document.createDocumentFragment()
let topBusqueda = []

document.addEventListener('DOMContentLoaded', () => {
loadWeb()
})

const loadWeb = () => {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'dd8cabede1mshe0ec84cea624362p1d3dc1jsn380f82de7f84',
            'X-RapidAPI-Host': 'contextualwebsearch-websearch-v1.p.rapidapi.com'
        }
    };
    
    fetch('http://localhost:5501/js/Api.json', options)
        .then(response => response.json())
        .then(response =>{
            topBusqueda = response.value
            creaTarjetas()
        })
        .catch(err => console.error(err));
}
const creaTarjetas = () => {
    topBusqueda.forEach((lugar) => {
    //Busqueda.querySelector('img').setAttribute('src', artista.url.displayImageUri)
    Busqueda.querySelectorAll('p')[0].textContent = lugar.title.thumbnail
    Busqueda.querySelectorAll('p')[1].textContent = lugar.title

    const clone = Busqueda.cloneNode(true)
    fragment.appendChild(clone)
    })
    Llamada.appendChild(fragment)
}
