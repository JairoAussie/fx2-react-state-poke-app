import React, {Component} from 'react'
import pokemons from './data/pokemons.json' 

class App extends Component{
    constructor(){
        super()
        this.state = {
            name: "pikachu",
            pokeImg: null
        }
    }

    getPokemon(name){
        fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
        .then(response => response.json())
        .then(data => {
            this.setState({
                name: data.name,
                pokeImg: data.sprites.other["official-artwork"].front_default
            })
        })
    }

    // changeValue(e) {
    //     //this.state.name = e.target.value
    //     // this.setState({
    //     //     name: e.target.value

    //     // })
    //     //this.getPokemon(this.state.name) one behind
    //     this.getPokemon(e.target.value)

    //   }
    componentDidMount(){
        this.getPokemon(this.state.name)
    }

    // componentDidUpdate(){
    //     this.getPokemon(this.state.name)
    // }

    render(){
        console.log("I'm rendering")
        return(
            <div>
                <h3>Poke App</h3>
                <p>I have {pokemons.length} pokemons</p>
                <select value={this.state.name} onChange={(e)=>this.getPokemon(e.target.value)}>
                    {pokemons.map(poke => 
                        <option key={poke.id} value={poke.name}>{poke.name}</option>
                    )}
                </select>
                <p>{this.state.name} I choose you!</p>
                <img src={this.state.pokeImg} alt={this.state.name} />        
            </div>
        )
    }

}

export default App