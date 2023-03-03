const cardsMusic = document.getElementById('cards')
const discoArtist = document.getElementById('disco').content
const fragment = document.createDocumentFragment()
let topCancion = []

document.addEventListener('DOMContentLoaded', () => {
loadMusuc()
})

const loadMusuc = () => {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'dd8cabede1mshe0ec84cea624362p1d3dc1jsn380f82de7f84',
            'X-RapidAPI-Host': 'spotify117.p.rapidapi.com'
        }
    };
    
    fetch('https://spotify117.p.rapidapi.com/spotify_playlist/?url=https%3A%2F%2Fopen.spotify.com%2Fplaylist%2F3nS8d7ekVjFLM4jVyqbDGY', options)
        .then(response => response.json())
        .then(response => {
            topMusic = response
            creaTarjetas()
        })
        .catch(err => console.error(err));
}
const creaTarjetas = () => {
    topCancion.forEach((Cancion) => {
    discoArtist.querySelector('img').setAttribute('src', artista.song_name.displayImageUri)
    discoArtist.querySelector('p').textContent = artista.song_name.artists[0].name
    discoArtist.querySelectorAll('p')[0].textContent = artista.song_name.artists[0].name
    discoArtist.querySelectorAll('p')[1].textContent = artista.song_name.song_nameName

    const clone = discoArtist.cloneNode(true)
    fragment.appendChild(clone)
    })
    cardsMusic.appendChild(fragment)
}