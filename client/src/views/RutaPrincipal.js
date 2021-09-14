import { Fragment, useEffect, useState } from 'react';
import {useSelector, useDispatch} from 'react-redux'
import { Link } from 'react-router-dom';
import Card from "../components/Card"
import Pagination from './../components/Pagination';
import { getDiets, getRecepies, getOrderScore, getOrderAbc, filterByName, filterByDiet } from "../actions/index";
import { Foot, Formulario, Container, Menu } from '../components/styledComponents';




export default function RutaPrincipal(){

    const dispatch = useDispatch();
    // Se traen los estados de dietas y recetas
    const { recepies, diets} = useSelector(state => state) // te traes el store de recetas y dietas
    //se crean estados locales
    //para ordenamiento y filtrado
    const [diet, setDiet] = useState('') //guarda el option elegido de tipos de dietas
    const [name, setName] = useState('') //guarda el string que se escribe en el input de busqueda
    const [order, setOrder] = useState('ASC') //guarda el string que se escribe en el input de busqueda
    const [orderType, setOrderType] = useState('') //guarda el string que se escribe en el input de busqueda
    //para paginado
    const [currentPage, setCurrentPage] = useState(1); // estado local de pagina actual
    const [recepiesPerPage] = useState(9); // estado local de cantidad de cards por pagina

    // Se carga el componente con las dietas y las recetas
    // const [recepies, setRecepies] = useState(allRecepies); //estado local de recetas

    useEffect( () => {
        dispatch(getDiets())
        dispatch(getRecepies())
    },[dispatch]);
  
    // Variables de paginado
    const indexOfLastRecepie = currentPage * recepiesPerPage; // indice de ultima card visualizada
    const indexOfFirstRecepie = indexOfLastRecepie - recepiesPerPage; // indice primera card visualizada
    const currentRecepies = recepies.slice(indexOfFirstRecepie, indexOfLastRecepie); // guarda el array con todas las recetas que se muestran en la pagina

    //Calculo de hojas de la paginacion
    
    const numberPages = Math.ceil(recepies.length/recepiesPerPage);
    const arrayPages = []
    for (let i = 1; i <= numberPages; i++) arrayPages.push(i);
    
    // funcion que limpia filtros

    const handleRecharge = (e) => {
        // e.preventDefault()
        dispatch(getRecepies()) 
        setCurrentPage(1)
        setDiet('')
        setName('')
        setOrder('ASC')
        setOrderType('id')
    }

    //funcion que ordena ascendente o descendentemente

    const handleOrder = (e, orderType, order) => {

        if( orderType === 'puntuacion'){
            dispatch(getOrderScore(orderType, e.target.value ))
            setCurrentPage(1)
            setOrder(e.target.value)
        } else {
            dispatch(getOrderAbc(orderType, e.target.value))
            setCurrentPage(1)
            setOrder(e.target.value)
        }
    }
    // Funcion qur ordena por puntos o abecedario


    const handleOrderType = (e, orderType, order) => {

        if(e.target.value === 'puntuacion'){
            dispatch(getOrderScore(e.target.value, order))
            setCurrentPage(1)
            setOrderType(e.target.value)
        } else {
            dispatch(getOrderAbc(e.target.value, order))
            setCurrentPage(1)
            setOrderType(e.target.value)
        }
       
    }

    const handleFilterByDiet =  (e) => {
        
         dispatch( filterByDiet(e.target.value) )
        setCurrentPage(1)
    //   console.log(e.target.value)
    }

    // Modifica el estado name en la medida en que se vaya escribiendo en el input

    const handleNameSearch = (e) => setName(e.target.value); 

    // Filtra las cards que se renderizan por lo que haya en el estado name

    const handleNameSubmit = (e, name) => {
        e.preventDefault()
        dispatch(filterByName(name))
        setCurrentPage(1)
        document.getElementById('name').value = ''
    }
    // funciones para lidiar con el paginado

    const paginate = pageNumber => setCurrentPage(pageNumber);
    const paginateMas = () => setCurrentPage(currentPage + 1)
    const paginateMenos = () => setCurrentPage(currentPage - 1);

    const prueba = {
        background: 'red',
        justifyContent: 'space-between',
        alignItems: 'center',
    }
    
    return(
        <Fragment>
            <Formulario>
                <nav>
                    <Menu>
                        <select className="form-select" onChange={ (e) =>  handleOrder(e, orderType, order)} >
                            <option > Ordenacion </option>
                            <option value={'ASC'}>Ascendente</option>
                            <option value={'DESC'}>Descendente</option>
                        </select>
                    </Menu>

                    <Menu>
                        <select className="form-select" onChange={ (e) =>  handleOrderType(e, orderType, order) }>
                            <option > Ordenacion </option>
                            <option value={'puntuacion'} >puntuacion</option>
                            <option value={'ABC'} >ABC</option>
                        </select>
                    </Menu>
                    <Menu>
                        <select className="form-select"  onChange={e => handleFilterByDiet(e)}>
                            <option  >Filtrado - Tipo de Dieta</option>
                            { 
                                diets && diets.map(e => <option value={e.nombre} key={e.id} > {e.nombre} </option>  )
                            }
                        </select>
                    </Menu>
                  
                    <Menu onSubmit={e => handleNameSubmit(e, name)}>
                        <input id='name' type={'text'} placeholder={'Buscar..'} onChange={e => handleNameSearch(e)} autoComplete='off' />
                        <button> Buscar </button>
                    </Menu>
                </nav>
                <nav className={prueba}>
                    <Menu >
                        <button  onClick={(e)=> handleRecharge()}>Recargar</button>
                        <Link to='/form'><button>Crear Receta</button></Link>
                    </Menu>
                    
                </nav>
            </Formulario>
           
            <Container>
                {  
                     currentRecepies.map(e => {
                        return(
                        <div>
                            <Card 
                            numero={e.numero} 
                            id={e.id} 
                            nombre={e.nombre} 
                            imagen={e.imagen} 
                            dieta={e.dietas} 
                            tipo={e.tipo} 
                            puntuacion={e.puntuacion} 
                            key={e.id}
                            className={'card'}/> 
                        </div>
                    )})
                }
                </Container> 
                <Foot>
                    <Pagination 
                    paginado={arrayPages} 
                    evento={paginate} 
                    eventoMas={paginateMas} 
                    eventoMenos={paginateMenos} 
                    pagina={currentPage}
                    setear={setCurrentPage}
                    />
                </Foot>  
            </Fragment>
    )
}



