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
                        <button 
                        key={e} 
                        value={e} 
                        onClick={ () => evento(e)}
                        id={'pag'}>
                        {e}</button>
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