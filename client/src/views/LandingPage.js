import { Link } from 'react-router-dom';


export default function LandingPage() {
    return(
        <div>
            <h1>Bienvenidos a mi ultra fantastica pagina</h1>
            <Link to='/principal'><button>Ingresar</button></Link>
        </div>
    )
}