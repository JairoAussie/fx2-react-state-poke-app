    // paragraph with the value of state.name
    // image with the url takedn from the API stored in state.pokeImg
const Pokemon = ({pokemon}) => {
    // console.log(pokemon)
        return ( pokemon &&
            <>
                <p>{pokemon.name} I choose you!</p>
                <img src={pokemon.sprites.other["official-artwork"].front_default} alt={pokemon.name} />
            </>
        )
    
}

export default Pokemon