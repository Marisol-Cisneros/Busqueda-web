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
    
    fetch('https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/Search/ImageSearchAPI?q=taylor%20swift&pageNumber=1&pageSize=10&autoCorrect=true', options)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));
}
