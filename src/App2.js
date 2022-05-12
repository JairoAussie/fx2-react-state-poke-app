import React from 'react'
import pokemons from './data/pokemons.json' 

// fetch("https://pokeapi.co/api/v2/pokemon/?limit=25")
// .then(response => response.json())
// .then(data => {
//   pokemons = data.results
//   console.log(pokemons)
// })
let name = "pikachu"
console.log(pokemons)
const changeValue = (e) => {
  name = e.target.value
  console.log(name)

}

const App = () => {
  
  return (
    <div >
      <h3>Poke App</h3>
      <p>I have {pokemons.length} pokemons</p>
      <select value={name} onChange={changeValue}>
        {pokemons.map(poke => 
          <option key={poke.id} value={poke.name}>{poke.name}</option>
        )}
      </select>
      <p>{name} I choose you!</p>
    </div>
  )
}

export default App
