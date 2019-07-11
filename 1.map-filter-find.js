const getPokeNames = (pokemons) => {
    return pokemons.map(pokemon => pokemon.name)
}

const getPokemonById = (pokemons, id) => {
    return pokemons.find(pokemon => pokemon.id === id)
}
const getRarePokemons = (pokemons) => {
    return pokemons.filter(pokemon => pokemon.spawn_chance < 0.10 );
    
}

const getMidSizedPokemon = (pokemons, weight) => {
    return pokemons.find(pokemon => pokemon.weight === weight)

}

const getAdultPokemons = (pokemons) =>{
    return pokemons.filter(pokemon => pokemon.egg === "Not in Eggs")
}

const getPokemonImages= (pokemons)=> {

}
module.exports = {
    getPokeNames,
    getPokemonById,
    getRarePokemons,
    getMidSizedPokemon,
    getAdultPokemons,
    getPokemonImages,
}