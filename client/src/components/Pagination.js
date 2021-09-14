import { Paginado} from './styledComponents'


export default function Pagination({paginado, evento, eventoMas, eventoMenos, pagina}){

    return(
        <Paginado>
            {
                pagina <= 1 ?
                <button disabled={true}> {'<'} </button> :
                <button onClick={ () => eventoMenos()}> {'<'} </button>
            }
            {
                paginado.map(e => {
                    return(
                        <button  value={e} onClick={ () => evento(e)} key={e} id={'pag'}>{e}</button>
                        )})
               
            }
            {
                pagina < paginado.length ?
                <button onClick={ () => eventoMas()}> {'>'} </button> :
                <button disabled={true}> {'>'} </button>
            }
        </Paginado>
    )
}