import React from 'react'
import { CardContainer, ImgContainer, PokeImg, ButtonContainer } from './styled'

const PokeCard = (props) => {
    return (
        <CardContainer>
            <ImgContainer>
            <PokeImg
                src= {props.pokeImg}
                alt= {props.name}
             />
            </ImgContainer>
            
            <ButtonContainer>
                <button>Adicionar a Pokedex</button>
                <button onClick = {props.details}>Detalhes</button>
            </ButtonContainer>
        </CardContainer>
    )
}

export default PokeCard
