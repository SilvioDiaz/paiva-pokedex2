import React from 'react'
import {CardDetails,ContentDetail} from "./styled"

function DetailsCard(props) {
    return (
        <CardDetails>
            <h1>{props.titulo}</h1>
            <ContentDetail detailType = {props.detailType}>
                {props.content}
            </ContentDetail>

        </CardDetails>
    )
}

export default DetailsCard
