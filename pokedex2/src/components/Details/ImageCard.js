import React from 'react'
import { loadingPage } from '../loading/loading'


function ImageCard(props) {
    return (
        <div>
            <img src = {props.constant && props.img}/>
        </div>
    )
}

export default ImageCard
