import './css/reset.css';
import './css/style.css';

console.log("hi")
const axios = require("axios")


const pokeContainer = document.getElementById("pokemon-container")
const getPokeBtn = document.getElementById("get-pokemon-btn")

let pokedexNum = 1;

function getRandomNum() {
    pokedexNum = Math.floor(Math.random() * (1025 - 1 + 1) + 1)
}

async function getRandomPokemon () {
    try{
        const pokemonRequest = await axios.get(`https://pokeapi.co/api/v2/pokemon-species/${pokedexNum}`)
        //console.log(pokemonRequest, "poke request")
        const pokemonData = pokemonRequest.data

        //console.log(pokemonData)

        const pokeHeader = document.createElement("p")
        pokeHeader.textContent = pokemonData.name.charAt(0).toUpperCase() + pokemonData.name.slice(1)
        pokeContainer.appendChild(pokeHeader)

        const pokeSprite = document.createElement("img")
        pokeSprite.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokedexNum}.png`
        pokeContainer.appendChild(pokeSprite)
    } catch (err) {
        console.error(err)
    }
}

getPokeBtn.addEventListener("click", () => {
    pokeContainer.textContent = "";
    getRandomNum()
    getRandomPokemon()
})