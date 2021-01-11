import { types } from "../types/types"

export const setError = ( error ) => ({
    type: types.uiSetError,
    payload: error
    
})

export const removeError = () => ({
    type: types.uiRemoveError
})


// 2. Crear dos acciones que modifiquen nuestro state en el uiReducer (no reciben argumentos)
//     Esas acciones tendrán el nombre de startLoading y finishLoading respectivamente

//     uiStartLoading: debe de colocar la propiedad loading en true
export const startLoading = () => ({
    type: types.uiStartLoading
})
//     uiFinishLoading: debe de colocar la propiedad loading en false
export const finishLoading = () => ({
    type: types.uiFinishLoading
})