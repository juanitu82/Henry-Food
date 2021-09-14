
import { useEffect, useState, Fragment } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getRecepieById } from '../actions';
import { Link } from 'react-router-dom';
import {ContainerDetails, CajitaGrid, Frag, FragDetails, ListasReceta} from '../components/styledComponents';
import './Details.css'

export default function Details({match}){
    const dispatch = useDispatch()
    const id = match.params.id
       
    useEffect( ()=>{
        dispatch( getRecepieById(id) )
    },[dispatch])

    const recId = useSelector(state => state.details)

    console.log(recId)
    return(
        <div>
        {
            recId ?
            (
            <Fragment>
                <h2>{recId.nombre}</h2>
                <div className='foto'>
                    <img src={recId.imagen} alt={recId.id}/>
                </div>

                <div className='resumen'>
                    <h3> Resumen del plato </h3>
                    <p> {recId.resumen} </p>
                </div>

                <div className='resumen2 '>
                    <ul className='resumen'>
                        {
                            recId.tipo && recId.tipo.length ?
                            (
                                <Fragment>
                                    <h3> Tipos de Platos</h3>
                                    {recId && recId.tipo.map( e => <li key={e}> {e} </li>)  }
                                </Fragment>
                            )
                            :
                            <Fragment></Fragment> 
                        }
                    </ul>
                        
                    <ul className='resumen'>
                        {
                            recId.dietas && recId.dietas.length ?
                            (
                                <Fragment>
                                    <h3>Tipo de Dietas</h3>
                                    {recId.dietas && recId.dietas.map(e => <li key={e}> {e}</li>)}
                                </Fragment>
                            )
                            :
                            <Fragment></Fragment> 
                        }
                    </ul>
                    <div className='otraCaja'>
                        <h3> Puntuacion: </h3>
                        <p> {recId.puntuacion} </p>
                    </div>
                    <div className='otraCaja'>
                        <h3> Salud: </h3>
                        <p> {recId.salud} </p>
                    </div>
                </div>
                <ul>Paso a paso
                    { 
                        recId.pasos && recId.pasos.map(e => <li key={e}> {e}</li>)   
                    }
                </ul>
                
               
                
            
                <Link to='/principal'> Volver </Link>
            </Fragment>
            ) :
            <p> Loading ...</p>
        }
        </div>
        )
}
   
      
        
       
       