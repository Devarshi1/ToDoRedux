import {ADD_TODO , UPDATE_TODO , DELETE_TODO, GET_TODO} from './todoTypes'

export const addToDo = (todo) => {
    return{
        type : ADD_TODO,
        payload : todo
    }
}

export const updateToDo = (todo) => {
    return{
        type : UPDATE_TODO,
        payload : todo
    }  
}

export const deleteToDo = (todo) => {

    return{
        type : DELETE_TODO,
        payload : todo
    } 
}

export const getToDo = (todos) => {
    return{
        type: GET_TODO,
        payload : todos
    }
}


