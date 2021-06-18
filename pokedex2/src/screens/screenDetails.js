import React, { useContext, useEffect } from 'react'
import useDetails from '../hooks/useDetails'
import ImageCard from "../components/PokeCard/ImageCard"
import DetailsCard from '../components/PokeCard/detailsCard'
import {CardArea,Div} from "./style"
import loading from "../Image/Loading.gif"
import  Header  from '../components/header/Header'
import { GlobalStateContext } from '../global/GlobalStateContext'



const ScreenDetails = (props) => {
    
    const [pokeDetails,getPokeDetail] = useDetails()
    const {Capitalize} = useContext(GlobalStateContext)

    useEffect(() => {
        getPokeDetail(props.name)
    }, [])

    const statsList = pokeDetails.stats && pokeDetails.stats.map((stat) => {
        return(
            <p>{Capitalize(stat.stat.name)}: {stat.base_stat}</p>
        )
    })

    const typeList = pokeDetails.types && pokeDetails.types.map((type) => {
        return(
            <p>{Capitalize(type.type.name)}</p>
        )
    })

    const moveList = pokeDetails.moves && pokeDetails.moves.slice(0,4).map((move) => {
        return(
            <p>{Capitalize(move.move.name)}</p>
        )
       
    })

    return (
        <div>
            <Header
            pagina = "Detalhes"
            h = {props.history}
            name = {pokeDetails.name}
            pokeImg = {pokeDetails.sprites && pokeDetails.sprites.front_default}
            />
            <Div>  

                <h1>{pokeDetails.name && Capitalize(pokeDetails.name)}</h1>

                <CardArea imageCard>
                        <ImageCard  img = {pokeDetails.sprites? (pokeDetails.sprites.front_default):loading} />
                        <ImageCard  img = {pokeDetails.sprites? (pokeDetails.sprites.back_default):loading} />

                </CardArea>

                <CardArea>
                    <DetailsCard
                        titulo = "Stats"
                        content = {statsList}
                    />
                </CardArea>

                <CardArea>
                    <DetailsCard
                        titulo = "Tipos"
                        content = {typeList}
                        detailType = "tipo"
                    />
                    <DetailsCard
                        titulo = "Moves"
                        content = {moveList}
                    />
                </CardArea>
            </Div>

        </div>
        
    )
}

export default ScreenDetails