// get an array of pokemon objects
import pokemons from './data/pokemons.json' 

const Heading = ({name, getPokemon}) =>{

    return(
        <>
            <h1>Poke App</h1>
            <p>I have {pokemons.length} pokemons</p>
            <select value={name} onChange={(e)=>getPokemon(e.target.value)}>
                {pokemons.map(poke => 
                    <option key={poke.id} value={poke.name}>{poke.name}</option>
            )}
            </select>
        </>
    )
}

export default Heading