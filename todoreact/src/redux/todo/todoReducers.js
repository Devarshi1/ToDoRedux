import { GET_TODO, ADD_TODO, UPDATE_TODO, DELETE_TODO } from "./todoTypes";
//task
//eta
//checkbox
//delete button

const initialState = {
  todos: [],
  todo: {
    id: undefined,
    task: "study",
    eta: '2001-10-01',
    complete: false
  },
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_TODO:
      return {
        ...state,
         todos: action.payload
      };
    case ADD_TODO : 
    return{
      ...state,
        todo :  action.payload    
    }
    case UPDATE_TODO :
      return{
        ...state,
        todo : {
          id : action.payload.id,
          task : action.payload.task,
          eta : action.payload.eta,
          complete : true
        }
      }
    default:
      return state;
  }
};
export default todoReducer;
