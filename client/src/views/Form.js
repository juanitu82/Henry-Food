
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { createRecepie, getDiets } from '../actions';
import {Dietas, FormStyles, Volver} from '../components/styledComponents'

const validate = (form) => {
    let errors = {};
    if(!form.nombre) errors.nombre = 'Es obligatorio ingresar un nombre';
    else if(!form.resumen) errors.resumen = 'Es obligatorio describir el plato';
    else if(!form.puntuacion || form.puntuacion > 100 || form.puntuacion < 1) errors.puntuacion = 'Es obligatorio ingresar una puntuacion del 1 al 100';
    else if(!form.salud || form.salud > 100 || form.salud < 1) errors.salud = 'Es obligatorio ingresar una puntuacion del 1 al 100';
    return errors
}

export default function Form(){
    const dispatch = useDispatch()
    const history = useHistory()
  
    const diets =  useSelector(state => state.diets)
    
    const [form, setForm] = useState({
        nombre: '',
        resumen: '',
        puntuacion: 0,
        salud: 0,
        pasos: [],
        dietas: []
    })
    const [pasosReceta, setPasosReceta] = useState('')
    const [ dieta, setDieta] = useState('')
    const [errors, setErrors] = useState({})

    const handleChangeForm = (e) => {
        if(e.target.name === 'puntuacion' || e.target.name === 'salud') {
            setForm( (state) => {
                return {
                    ...state,
                    [e.target.name]: Number(e.target.value)
                }
            })
            setErrors(validate({
                ...form,
                [e.target.name]: Number(e.target.value)
            }))
        } else {
            setForm( (state) => {
            return {
                ...state,
                [e.target.name]: e.target.value
            }
            })
            setErrors(validate({
                ...form,
                [e.target.name]: Number(e.target.value)
            }))
        }   
     
    }

    const handleChangePasos = (e) => {
        e.preventDefault()
        setPasosReceta(e.target.value)
    }

    const agregarPaso = (e) => {
        e.preventDefault()
        setForm({
            ...form,
            pasos: [...form.pasos, pasosReceta]      
        })
        setPasosReceta('')
        document.getElementById('pasos').value = '';
    }

    const agregarDieta =   (e) => {
          setDieta(e.target.value)
          setForm({
            ...form,
            dietas: [...form.dietas, e.target.value]      
        })
    }

    const deleteDieta = (el) => {
        setForm({
            ...form,
            dietas: form.dietas.filter(dieta => el !== dieta)
        })
        // e.preventDefault()
        // console.log(form.dietas.indexOf(e.target.innerText))
        // console.log(form.dietas)
        // let index = form.dietas.indexOf(e.target.innerText)
        // form.dietas.splice(index, index++)
        // console.log(form.dietas)
    }
   
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(form)
        dispatch(createRecepie({...form, createdInDB: true }))
        setForm({
            nombre: '',
            resumen: '',
            puntos: 0,
            salud: 0,
            pasos: [],
            dietas: []
        })
        alert('done!')
        history.push('/principal')
    }

    useEffect(()=> {
        dispatch(getDiets())
    },[dispatch, form])

    console.log(errors)
    console.log(errors.nombre)
    return(
        <div>
            <Volver>
                <Link to='/principal'> volver </Link>
            </Volver>
            <h2> Crea tu propia receta </h2>
            <FormStyles id='form' onSubmit={e => handleSubmit(e)}>
                <label> Nombre <input type={'text'} name='nombre' onChange={handleChangeForm} autoComplete='off'/></label>
                {errors.nombre && (<p>{errors.nombre}</p>)}
                <textarea name='resumen'onChange={handleChangeForm} placeholder='Resumen'/>
                {errors.resumen && (<p>{errors.resumen}</p>)}
                <div>
                    <div>
                        <label> Puntuacion <input type={'number'} name='puntuacion' onChange={handleChangeForm}/></label>
                       
                    </div>
                    <div>
                        <label> Nivel de C. Saludable <input type={'number'} name='salud' onChange={handleChangeForm}/></label>
                        
                    </div>
                </div>
                <div>
                {errors.puntuacion && (<p>{errors.puntuacion}</p>)}
                {errors.salud && (<p>{errors.salud}</p>)}

                </div>
                <select onChange={ (e) => agregarDieta(e)}>
                    <option> Dietas </option>
                    { diets && diets.map(e => <option key={e.id} value={e.nombre}> {e.nombre} </option> ) }
                </select>
               
               
                <label> Pasos <input type={'text'} name='pasos' id='pasos' onChange={handleChangePasos} autoComplete='off'/></label>
                <button onClick={e => agregarPaso(e)}> Agregar paso </button>
                <hr/>

                <button > Crear </button>
                </FormStyles>
                <Dietas>
                {
                    form.dietas.map(el => {
                    return(
                        <div>
                            <p> {el} </p>
                            <button onClick={ () => deleteDieta(el) }> X </button>
                        </div>
                    )})
                }
                </Dietas>
            
        </div>
    )
}