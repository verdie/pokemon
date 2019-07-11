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

const getHeaviestPokemon = (pokemons) => pokemons.reduce(function (current, pokemon) {
    if (parseFloat(current.weight) < parseFloat(pokemon.weight)) {
       return pokemon;
    } else {
        return current;
    }
   })
    // const heaviest = pokemons.find(pokemon => pokemon.weight === '460.0 kg');
    // return heaviest
    


const categorizePokemonsByRarity =(pokemons) =>{
    const pokemonsByRarity ={
        common : [],
        rare : [],
        legendary : []
    }

    const pokemonsByRarityClasses = pokemons.reduce(function(pokemon,current){
        if (pokemon.spawn_chance > 0.1){
            return current.common.push(pokemon)
        }
        else if (pokemon.spawn_chance < 0.1, pokemon.spawn_chance > 0.01){
            return current.rare.push(pokemon)
        }
        else return current
    }, pokemonsByRarity )

    
return pokemonsByRarityClasses

}
// common has spawn_chance above 0.1
// rare has spawn_chance below 0.1 but higher than 0.01
// legendary has a spawn chance of 0.01 or lower
module.exports = {
    calculateTotalPokemonWeight,
    calculateAverageSpawnChance,
    calculateTotalEggDistance,
    getHeaviestPokemon,
    categorizePokemonsByRarity
}

