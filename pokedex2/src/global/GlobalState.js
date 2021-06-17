import React from 'react'
import { GlobalStateContext } from "./GlobalStateContext"
import axios from "axios"
import { useEffect, useState } from "react"
import { BASE_URL } from "../constant/url"

const GlobalState = (props) => {
    const [pokemon, setPokemon] = useState([])
    const [pokeDetails, setPokeDetails] = useState([])
    const [pokedex, setPokedex] = useState([])
    const [pageNumber,setPageNumber] = useState(0)

    useEffect(() => {
        getPokemon(pageNumber)
    }, [pageNumber])

    const getPokemon = (pageNumber) => {
        let offset = 0
        if(pageNumber > 1){
            offset = (20*pageNumber) -20
            console.log(offset)
        }
        axios
            .get(`${BASE_URL}?limit=20&offset=${offset}`)
            .then((response) => {
                setPokemon(response.data.results)
            })
            .catch((err) => {
                alert(err.message)
            })
    }

    // tentativa de fazer mais rapido, mas não está funcionando, as vezes vai e outras não

    // const getPokeDetail = () => {
        
    //     pokemon.forEach((poke) => {
    //         axios.get(`${poke.url}`)
    //             .then((res) => {
                   
    //                 const pokedata = { name: res.data.name, img: res.data.sprites.front_default }
    //                 console.log("pokedata", pokedata)
                    
    //                 setPokeDetails([...pokeDetails, pokedata])

    //             })
    //             .catch((err) => {
    //                 console.log(err.message)
    //             })


    //     })

    //     console.log("pokeDetails", pokeDetails)

    // }

    // Forma muito lenta, muitas informações

    const getPokeDetail = (name) => {
        const detailList = []

        name.forEach((poke) => {

            if(poke.name){

                axios
                .get(`${BASE_URL}/${poke.name}`)
                .then((response) => {
                    detailList.push(response.data)
                    if(detailList.length === name.length){
                        const pokeOrder = detailList.sort((a,b) => {
                            return a.id - b.id
                        })
                        setPokeDetails(pokeOrder)
                    }
                })
                .catch((err) => {
                    alert(err.message)
                })
            }
        })
    }

    useEffect(() => {
        getPokeDetail(pokemon)
        
    }, [pokemon])


    return (
        <GlobalStateContext.Provider value={{pokeDetails, pokedex, setPokedex,setPageNumber }} >
            {props.children}
        </GlobalStateContext.Provider>
    )
}

export default GlobalState
