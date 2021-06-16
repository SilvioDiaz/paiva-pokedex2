import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import useDetails from '../hooks/useDetails'
import { loadingPage } from '../components/loading/loading'



const FakeCard = styled.div`
    background-color: red;
    border: 1px black solid;
    width:100%;
    height:100%;
    margin:1rem;
`

const Div = styled.div`
    display:flex;
    justify-content: space-between;

    height:100%;

    padding:2rem;
`

const CardArea = styled.div`
    width:${props => props.imageCard ? "20%": "30%"};
    height:100%;
`


const ScreenDetails = (props) => {
    const [pokeDetails,getPokeDetail] = useDetails()

    const params = useParams()
    console.log(params)

    useEffect(() => {
        getPokeDetail(params.name)
    }, [])

    console.log(pokeDetails)


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

    if(pokeDetails.length > 0){
        alert('oi')
    }


    return (
        <Div>  
            <h1>{pokeDetails.name && pokeDetails.name}</h1>
            <CardArea imageCard> 
                <imageCard/>
                <FakeCard>
                    {pokeDetails.sprites? (<img src = {pokeDetails.sprites.front_default}/>):loadingPage()}
                </FakeCard>
                <FakeCard>
                    {pokeDetails.sprites? (<img src = {pokeDetails.sprites.back_default}/>):loadingPage()}
                </FakeCard>
            </CardArea>
            <CardArea>
            <FakeCard id = "stats">
                <h1>Stats</h1>
                {statsList}
            </FakeCard>
            </CardArea>
            <CardArea>
                <FakeCard>
                    <h1>Tipos</h1>
                    {typeList}
                </FakeCard>
                <FakeCard>
                    <h1>Moves</h1>
                    {moveList}
                </FakeCard>
            </CardArea>
        </Div>
        
    )
}

export default ScreenDetails
