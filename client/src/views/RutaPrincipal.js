import Card from "../components/Card"
import { Fragment, useEffect, useState } from 'react';
import {useSelector, useDispatch} from 'react-redux'
import Pagination from './../components/Pagination';
import { Link } from 'react-router-dom';
import { getAllRecepies, getRecepies } from "../actions/index";
// import axios from 'axios'

export default function RutaPrincipal(){

    const {recepies, pages} = useSelector(state => state ) //trae recepies y pages del estado
    const dispatch = useDispatch();
    const [orderType, setOrderType] = useState('nombre')
    const [order, setOrder] = useState('ASC')
    const [pagina, setPagina] = useState(0) //guarda el numero de pagina
    
    useEffect( () => {
        dispatch(getRecepies(pagina, orderType, order)) //trae las recetas que se van a renderizar en esa pagina(por defecto la primera)
        dispatch(getAllRecepies())//trae todas las recetas de la DB
    }, [dispatch, pagina, orderType, order]);


   const handleChangeOrder = async (e) => {
        e.preventDefault()
        await setOrder(e.target.value)
        console.log(order) 
    }
   
    
   const handleChangeOrderType = async (e) => {
        e.preventDefault()
        await setOrderType(e.target.value)
        console.log(orderType) 
    }
    const style2 = {
        display: 'grid',
        gridTemplateColumns: 'auto auto auto'
    };

    

    return(
        <Fragment>
            <Link to='/form'><button>Crear Receta</button></Link>
           
            <form>
                <select onChange={(e)=>handleChangeOrder(e)}>
                    <option value={'ASC'}>Ascendente</option>
                    <option value={'DESC'}>Descendente</option>
                </select>
                
                <select  name='hola'>
                    <option disabled selected>Filtrado - Tipo de Dieta</option>
                    <option value={'gluten'}>Gluten-Free</option>
                    <option value={'Ketogenic'}>Ketogenic</option>
                    <option value={'Vegetarian'}>Vegetarian</option>
                    <option value={'Lacto-Vegetarian'}>Lacto-Vegetarian</option>
                    <option value={'Ovo-Vegetarian'}>Ovo-Vegetarian</option>
                    <option value={'Vegan'}>Vegan</option>
                    <option value={'Pescetarian'}>Pescetarian</option>
                    <option value={'Paleo'}>Paleo</option>
                    <option value={'Primal'}>Primal</option>
                    <option value={'Whole30'}>Whole30</option>
                </select>
                <label> Puntuacion <input type={'checkbox'} value={'puntuacion'} onChange={(e)=>handleChangeOrderType(e)}/> </label>
                <label> ABC <input type={'checkbox'} value={'nombre'} onChange={(e)=>handleChangeOrderType(e)}/> </label>
                <input type={'tex'} placeholder={'Buscar..'}/>
                
            </form>
            <div style={style2}>
                {
                    
                    recepies && recepies.map(e => {
                        return(
                        
                                <Link to={`/details/:${e.id}`}><Card nombre={e.nombre} imagen={e.imagen} dieta={e.dieta} tipo={e.tipo} puntuacion={e.puntuacion} key={e.id}/></Link>
                        
                            )})
                }
            
            </div>
            
            <Pagination pag={pages}/>
        </Fragment>
    )
}