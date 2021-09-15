import { Link } from "react-router-dom"
import './LandingPage.css'

export default function LandingPage() {
   
    return(
        <div className='landing' >
            <h1 className='titulo'>Bienvenidos a mi ultra fantastica pagina</h1>
            <div className='boton-landing'><Link to='/principal' className='boton-landing'><button>Ingresar</button></Link></div>
        </div>
    )
}