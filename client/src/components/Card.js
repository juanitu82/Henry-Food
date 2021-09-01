export default function Card(props){
    const style1 = {
        border: '2px solid',
        maxHeight: '600px',
        MaxWidth: '200px',
        margin: '10px',
        
    }

    const style2 = {
        listStyleType: 'none'
    }

    const flex = {
        display:'flex',
        justifyContent: 'center'
    }
    return(
        <div style={style1}>
            <h3>{props.nombre}</h3>
            <img src={props.imagen} alt={props.nombre}/>
            <div style={flex}>
                <ul style={style2}>
                    <h3> Tipos de Dietas</h3>
                    {props.dieta && props.dieta.map(e => <li> {e} </li>)}
                </ul>
                <ul style={style2}>
                    <h3> Tipos de Platos</h3>
                    {props.tipo && props.tipo.map(e => <li> {e} </li>)}
                </ul>
            </div>
            <p>{props.puntuacion}</p>
        </div>
    )
}