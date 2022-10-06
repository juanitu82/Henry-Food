import { Link } from 'react-router-dom';
import {Frag} from './styledComponents'

export default function Card(props){
console.log(props)
    return(
        <Frag >
            <Link to={`/details/${props.id}`}> 
                <div><h3>{props.nombre}</h3></div>
                <div><img src={props.imagen} alt={props.nombre}/></div>
                <div style={{display: 'flex'}}>
                    <div>
                        <h4> Tipos de Dietas</h4>
                        <ul style={{listStyleType: 'none'}}>
                            {
                                typeof props.id === 'number' ?
                                props.dieta && props.dieta.map(e => <li key={e}> {e} </li>)
                                :
                                props.dieta && props.dieta.map(e => <li key={e.nombre}> {e.nombre} </li>)
                            
                            }
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
                <div> <button >{props.puntuacion}</button></div>
                
            </Link>
        </Frag>
    )
}