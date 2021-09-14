import { Link } from "react-router-dom"
// import { useDispatch} from 'react-redux'
// import { useEffect } from 'react';
// import { getDiets, getRecepies } from "../actions";



export default function LandingPage() {
    // const dispatch = useDispatch()
    // useEffect(() => {
    //     dispatch(getRecepies())
    //     dispatch(getDiets())
    // }, [dispatch])
    return(
        <div>
            <h1>Bienvenidos a mi ultra fantastica pagina</h1>
            <Link to='/principal'><button>Ingresar</button></Link>
        </div>
    )
}