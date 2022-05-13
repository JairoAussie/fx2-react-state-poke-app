import React, {Component} from 'react'
import Heading from './Heading'
import Pokemon from './Pokemon'

// creation of the App class component, inheriting from React.component
class App extends Component{
    // first phase of mounting, initialise state, super() 
    constructor(props){
        super(props)
        // initialising state, it is an object inherited from Component
        this.state = {
            pokemon: null, // stores all the information about the retrieved pokemon
            name: "pikachu",
            // pokeImg: null
           
        }
        //this.getPokemon = this.getPokemon.bind(this);
    }

    // get the pokemon from the API using the name of the of the pokemon
    // We run this method in ComponentDidMount and onChange event in the select list
    getPokemon = (name)=>{ // getPokemon(name){}
        fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
        .then(response => response.json())
        .then(data => {
            // update the state, name takes the value of data.name, and image takes an image from the API
            // Every time setState is invoked, the updating process of the lifecycle starts again, first step render
            //
            this.setState({
                pokemon: data, 
                name: name
            })
        })
        .catch(e => console.log(e))
    }

    // changeValue= (e) =>{
    //     //this.state.name = e.target.value
    //     this.setState({
    //         name: e.target.value

    //     })
    //     //this.getPokemon(this.state.name) one behind
    //     console.log(e.target.value)
    //     this.getPokemon(e.target.value)

    //   }
    // Last step in the mounting process, usually async tasks run here. 
    // Get the pokemon from from the API invoking getPokemon method
    componentDidMount(){
        this.getPokemon(this.state.name)
    }

    // componentDidUpdate(){
    //     this.getPokemon(this.state.name)
    // }
    // The second step in the mounting process, returns a compoent that is rendered in the browser
    // A select list with the names gotten from pokemons.json
    // Render the Pokemon functional component, sending name and image as props. It can be a FC because it doesn't need to handle any state
    render(){
        const {pokemon, name} = this.state
        // console.log("I'm rendering")
        return(
            <div>
                <Heading name = {name} getPokemon={this.getPokemon}/>
                
                <Pokemon pokemon={pokemon}/>
                
                   
            </div>
        )
    }

}

export default App