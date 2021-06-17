import React, { useContext } from 'react'
import { GlobalStateContext } from '../global/GlobalStateContext';
import PokeCard from '../components/PokeCard/PokeCard';
import {AreaCard} from "./style"
import { goTo } from '../router/Coordinator';
import { useHistory } from "react-router-dom";
import RenderPagination from '../components/Pagination/Pagination';

const ScreenPokemon = (props) => {
    const {pokeDetails} = useContext(GlobalStateContext)
    const history = useHistory();

    const pagenation = RenderPagination()

    const listPokemon = pokeDetails.map((poke) => {
        return  (
            
            <div>
                <h1>{poke.id}</h1>
                <PokeCard
                name = {poke.name}
                pokeImg = {poke.sprites.front_default}
                details = {() => goTo(history,`/details/${poke.name}`)}
                />
            </div>
        )
    })

    return (
        <div>
            <AreaCard>
            {listPokemon.length ? listPokemon : "Carregando"}
            </AreaCard>
            {pagenation}
        </div>
    )
}

export default ScreenPokemon
