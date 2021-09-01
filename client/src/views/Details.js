export default function Details(props){
    console.log(props)
    return(
        <div border={`1px solid`}>
            <h3>Hola soy una Card</h3>
            <img alt={`imagen`}/>
            <p> Nombre</p>
            <p>Tipo de Dieta</p>
            <p>Tipo de plato</p>
            <p>Resumen: </p>
            <p>Puntuacion </p>
            <p>Comida Saludable </p>
            <ul>Paso a paso</ul>
        </div>
    )
}