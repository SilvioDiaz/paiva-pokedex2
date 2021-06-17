import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import useDetails from '../hooks/useDetails'
import ImageCard from "../components/PokeCard/ImageCard"
import DetailsCard from '../components/PokeCard/detailsCard.'
import {CardArea,Div} from "./style"
import loading from "../Image/loading.gif"



const ScreenDetails = (props) => {
    
    const [pokeDetails,getPokeDetail] = useDetails()

    const params = useParams()

    useEffect(() => {
        getPokeDetail(params.name)
    }, [])

    const statsList = pokeDetails.stats && pokeDetails.stats.map((stat) => {
        return(
            <p>{stat.stat.name}:{stat.base_stat}</p>
        )
    })

    const typeList = pokeDetails.types && pokeDetails.types.map((type) => {
        return(
            <p>{type.type.name}</p>
        )
    })

    const moveList = pokeDetails.moves && pokeDetails.moves.slice(0,4).map((move) => {
        return(
            <p>{move.move.name}</p>
        )
       
    })

    return (
        <Div>  
            <h1>{pokeDetails.name && pokeDetails.name}</h1>

            <CardArea imageCard>
                    <ImageCard id="front" img = {pokeDetails.sprites? (pokeDetails.sprites.front_default):loading} />
                    <ImageCard id="front" img = {pokeDetails.sprites? (pokeDetails.sprites.back_default):loading} />

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
        
    )
}

export default ScreenDetails
