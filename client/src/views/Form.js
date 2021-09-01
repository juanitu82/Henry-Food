export default function Form(){
    return(
        <div>
            <form>
                <input type={'text'}/>
                <textarea> Resumen </textarea>
                <input type={'number'}/>
                <input type={'number'}/>
                <select>
                    <h3>Filtrado - Tipo de Dieta</h3>
                    <option>Gluten-Free</option>
                    <option>Ketogenic</option>
                    <option>Vegetarian</option>
                    <option>Lacto-Vegetarian</option>
                    <option>Ovo-Vegetarian</option>
                    <option>Vegan</option>
                    <option>Pescetarian</option>
                    <option>Paleo</option>
                    <option>Primal</option>
                    <option>Whole30</option>
                </select>
            
                <button>Crear</button>
            </form>
        </div>
    )
}