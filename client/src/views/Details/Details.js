
import { useEffect, Fragment } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getRecepieById } from '../../actions';
import { Link } from 'react-router-dom';
import './Details.css'

export default function Details({match}){

    const dispatch = useDispatch()

    const id = match.params.id
       
    useEffect( ()=>{
        dispatch( getRecepieById(id) )
    },[dispatch])

    const recId = useSelector(state => state.details)

    return(
        <div>
        {
            recId ?
            (
            <Fragment className='container'>
                <h2>{recId.nombre}</h2>
                
                <div className='foto container'> <img src={recId.imagen} alt={recId.id}/> </div>

                <div className='resumen container'>
                    <h3> Resumen del plato </h3>
                    <p> {recId.resumen} </p>
                </div>
                

                <div className='resumen2 container'>
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

                    <div className='otraCaja'>
                        <div className='puntos'>
                            <h3> Puntuacion: </h3>
                            <p> {recId.puntuacion} </p>
                        </div>
                        <div className='salud'>   
                            <h3> Salud: </h3>
                            <p> {recId.salud} </p>
                        </div>
                    </div>
                        
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
                </div>
                <div className='pasoAPaso container'>
                    <ul>
                        { 
                            recId.pasos ?
                         <Fragment>
                            <h3> Paso a paso</h3>
                            {recId.pasos && recId.pasos.map(e => <li key={e}> {e}</li>) }  
                        </Fragment>
                        :<Fragment></Fragment>
                        }
                    </ul>
                </div>
                <div className='caja-boton container'><Link to='/principal' className='boton'> Volver </Link></div>
            </Fragment>
            ) :
            <p> Loading ...</p>
        }
        </div>
        )
}
   
      
        
       
       