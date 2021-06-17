import React from 'react'
import { PokeImg,ImgContainer,CardContainer } from "./styled"

function ImageCard(props) {
    return (
        <CardContainer>
            <ImgContainer>
                <PokeImg src = {props.img}/>
            </ImgContainer>
        </CardContainer>


    )
}

export default ImageCard
