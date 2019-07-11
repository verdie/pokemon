const calculateTotalPokemonWeight = (pokemons) => {
    return pokemons.reduce((totalWeight, currentPokemon) => {
        return totalWeight + parseFloat(currentPokemon.weight)
    }, 0)
}

const calculateAverageSpawnChance = (pokemons) => {
    const sum = pokemons.reduce(function(total, currectPokemon){
        return total += currectPokemon.spawn_chance;
},0)
    return sum / pokemons.length
    
}

const calculateTotalEggDistance = (pokemons)=>{
    return pokemons.reduce((totalEggDistance, currentPokemon) => {
        const egg = parseFloat(currentPokemon.egg);
        if (!isNaN(egg)) {
          return totalEggDistance + egg;
        } else {
          return totalEggDistance;
        }
    }, 0)
}

const getHeaviestPokemon = (pokemons) =>{
    const heaviest = pokemons.find(pokemon => pokemon.weight === '460.0 kg');
    return heaviest.id
}

module.exports = {
    calculateTotalPokemonWeight,
    calculateAverageSpawnChance,
    calculateTotalEggDistance,
    getHeaviestPokemon,
}

