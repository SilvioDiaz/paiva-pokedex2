import { GlobalStateContext } from '../../global/GlobalStateContext';
import React,{useContext} from "react"

const RenderPagination = () => {
    const {setPageNumber} = useContext(GlobalStateContext) 
    const paging = []

    for (let i= 1;i < 57; i++){
        paging.push(
            <button onClick = {() => setPageNumber(i)}>
                {i}
            </button>
        )
      }
  
      return paging
   }  

export default RenderPagination
