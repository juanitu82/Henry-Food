const orderArray = (array, orderType = 'id', order = 'ASC') => {
    // console.log(...params)
    if(orderType === 'nombre'){
         order === 'ASC' ? 
         array.sort( (a, b) => a.nombre.localeCompare(b.nombre) ) : 
         array.sort( (a, b) => b.nombre.localeCompare(a.nombre) )
    }else if(orderType === 'puntuacion'){
        order === 'ASC' ? 
        array.sort((a, b) => a.puntuacion - b.puntuacion) :
        array.sort( (a, b) => b.puntuacion - a.puntuacion)
    }else if(order === 'ASC'){
        array.sort((a, b) => a.id - b.id);
    }else array.sort( (a, b) => b.id - a.id)
    
}

// orderArray([], 1, 2)

module.exports = orderArray