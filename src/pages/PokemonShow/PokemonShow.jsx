import { useParams } from 'react-router-dom'
import './PokemonShow.css'
import { pokeData } from '../../data/pokeData'

const PokemonShow = () => {
  const {pokeId} = useParams()
  const pokemon = pokeData[pokeId]
  console.log(pokemon) 

  return ( 
  <>
    <div className='pokemon-card'>
      <h1 className='name'>{pokemon.name[0].toUpperCase() + pokemon.name.slice(1)}</h1>
      <img className='pokemon-image' src={pokemon.image} alt={`${pokemon.name} the pokemon`} />
      <div className='type-container'>
        {pokemon.types.map((type, idx) => 
          <p className={type.type.name + ' name'} key={idx}>{type.type.name}</p>  
        )}
      </div>
      <div className='height-weight-container'>
        <p className='height'>height: {pokemon.height / 10} m</p>
        <p className='weight'>weight: {pokemon.weight / 10} kg</p>
      </div>
      <div className='stat-container'>
        {pokemon.stats.map((stat, idx) =>
          <p key={idx} className='stat'>{stat.stat.name}: {stat.base_stat}</p>
        )}
      </div>
      <p className='abilities-title'>abilities:</p>
      <div className='abilities-container'>
        {pokemon.abilities.map((ability, idx) =>
          <p className='ability' key={idx}>{ability.ability.name}</p>
        )}
      </div>
    </div>
  </>
)
}

export default PokemonShow