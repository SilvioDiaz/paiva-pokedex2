import axios from "axios"
import { useEffect, useState } from "react"
import { BASE_URL } from "../constant/url"

const useDetails = () => {
    const [pokeDetails,setPokeDetails] = useState([])
    
    const getPokeDetail = (name) => {
        axios
        .get(`${BASE_URL}/${name}`)
        .then((response) => {
            setPokeDetails(response.data)
        })
        .catch((err) => {
            alert(err.message)
        })
    } 

   return [pokeDetails, getPokeDetail]

}

export default useDetails
