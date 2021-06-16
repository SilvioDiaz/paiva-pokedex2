import React from 'react'
import { Header } from '../components/header/header'
import { useHistory } from "react-router-dom";
import ScreenPokemon from '../screens/screenPokemon';
import { goTo } from '../router/Coordinator';

const Home = () => {
    const history = useHistory();
    return (
        <div>
            <Header>
                <button onClick={()=> goTo(history,"/pokedex") } >Pokedex </button> 
                <h3>Lista de pokemon</h3>
            </Header>
            <ScreenPokemon/>
        </div>
    )
}

export default Home
