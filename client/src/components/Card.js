import { Link } from 'react-router-dom';
import { Fragment } from 'react';
import {Frag} from './styledComponents'



export default function Card(props){

    return(
        <Frag >
            <Link to={`/details/${props.id}`}> 
                <h3>{props.nombre}</h3> 
                <img src={props.imagen} alt={props.nombre}/>
                <div style={{display: 'flex'}}>
                    <div>
                        <h4> Tipos de Dietas</h4>
                        <ul style={{listStyleType: 'none'}}>
                            {props.dieta && props.dieta.map(e => <li> {e} </li>)}
                        </ul>
                    </div>
                    <div>
                        <h4> Tipos de Platos</h4>
                        <ul style={{listStyleType: 'none'}}>
                        {
                            props.tipo && props.tipo.map(e => <li key={e}> {e} </li>)         
                        }
                        </ul>
                    </div>
                </div>
                <p>PTS: {props.puntuacion}</p>
            </Link>
        </Frag>
    )
}