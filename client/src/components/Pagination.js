
import { useEffect, useState } from 'react';
import {useSelector, useDispatch} from 'react-redux'
import { getAllRecepies, getRecepies } from "../actions/index";



export default function Pagination({pag}){
    
    const  pages = useSelector(state => state.pages ) //trae recepies y pages del estado
    const dispatch = useDispatch();
    const [pagina, setPagina] = useState(0) //guarda el numero de pagina
    
    

   const handleChange = async (e) => {
        e.preventDefault()
        await setPagina(e.target.value)
        console.log(pagina)
        dispatch(getRecepies(pagina))
        // console.log(e.target.value)
    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        // setPagina(e.target.value)
    }

    return(
        <div border={'1px solid'}>
            <h3>Soy la pagination</h3>
            <button> {'<'} </button>
            {
                
                pag.map(e => {
                    return(
                        <button value={e} onClick={handleChange} key={e}>{e}</button>
                        )})

            }
            <button> {'>'} </button>
        </div>
    )
}