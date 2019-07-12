
const { getPokemonById } = require('./1.map-filter-find')
const { categorizePokemonsByRarity } = require('./2.reduce')


const getGymLeader = (gym, trainers) => {
    return trainers.find(trainer => trainer.id === gym.trainerId)
}

const getTrainerPokemons = (trainer, pokemons) => {
    return pokemons.filter(pokemon => trainer.pokemonIds.indexOf(pokemon.id ) != -1 )
}

const getTrainersPokemons = (trainers, pokemons) => {
    return trainers.map((trainer)=> {
        trainer.pokemons  = getTrainerPokemons(trainer, pokemons) 
       
        return trainer
    })
}

const getBigGyms = (gyms, trainers) => {
    return gyms.map((gym)=>{
        const trainer = trainers.find((trainer)=>{
            return gym.trainerId === trainer.id
        })
        if (trainer.pokemonIds.length >=4){
            return gym.city
        }
        else return null
    })
}

const getRarestGym = (gyms, trainers, pokemons) => {
    return gyms.reduce((acc, gym)=>{
        const trainer= trainers.find( (trainer)=> {
            return trainer.id === gym.trainerId
        })
        const trainerPokenoms = getTrainerPokemons(trainer, pokemons);
        const trainerPokemonsByRarity = categorizePokemonsByRarity(trainerPokenoms);
        const trainerAcc= trainers.find( (trainer)=> {
            return trainer.id === acc.trainerId
        })
        const trainerPokenomsAcc = getTrainerPokemons(trainerAcc, pokemons);
        const trainerPokemonsByRarityAcc = categorizePokemonsByRarity(trainerPokenomsAcc);
        if (trainerPokemonsByRarity.legendary.length > trainerPokemonsByRarityAcc.legendary.length){
            return gym
        }

        else return acc
    })
}

module.exports = {
    getGymLeader,
    getTrainerPokemons,
    getTrainersPokemons,
    getBigGyms,
    getRarestGym,
}