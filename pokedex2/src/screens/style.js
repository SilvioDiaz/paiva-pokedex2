import styled from "styled-components"

export const AreaCard = styled.div`
display:grid;
grid-template-columns: 2fr 2fr 2fr;
grid-template-rows: auto;
`

export const CardArea = styled.div`
    width:${props => props.imageCard ? "20%": "30%"};
    height:100%;
`

export const Div = styled.div`
    display:flex;
    justify-content: space-between;
    height:100%;
    padding:2rem;
`
