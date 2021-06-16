import React, { useContext } from 'react'
import { Header } from '../components/header/header'
import { goTo } from '../router/Coordinator';
import { useHistory } from "react-router-dom";


const Pokedex = (props) => {
    const history = useHistory();
    return (
        <div>
            <Header>
                <button onClick={()=> goTo(history,"/")}>Voltar para a lista de pokemons</button>
                <h3>Nome do pokemon</h3>
            </Header>
        </div>
    )
}

export default Pokedex
