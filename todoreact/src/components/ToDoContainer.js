import React, {useEffect } from "react";
import { addToDo, getToDo, updateToDo, deleteToDo } from "../redux";
import { connect } from "react-redux";
import axios from "axios";
import {FaTrash} from 'react-icons/all'
import moment from 'moment'
function ToDoContainer(props) {
  console.log("Hii" ,props)
  const add = async () => {
    axios
      .post("http://127.0.0.1:8000/createTodo/", 
       props.todo
      )
      .then((response) => {
        const res = response.data;
        if (res.success === true) {
          getT();
        }
      });
  };


  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "task") {
      props.addToDo({
        ...props.todo,
        task: value,
        complete: false,
      });
    } else {
      props.addToDo({
        ...props.todo,
        eta: value,
      });
    }
  };


  useEffect(() => {
    getT();
  }, []);

  const getT = async () => {
    axios.get("http://127.0.0.1:8000/showTodo/")
    .then((response) => {
      const res = response.data;
      console.log(response.data)
      props.getToDo(res);
    });
    
  };

  const checkFunction = (props) =>{
      const check = document.getElementById(props.id)
      if (check.checked === true ){
        const data = {
          id : props.id,
          task : props.task,
          complete : true,
          eta : props.eta,
        }
      axios
      .put("http://127.0.0.1:8000/updateTodo/", data )
      .then((response) => {
        const res = response.data;
        if (res.success === true) {
          getT();
        }
      });
      } 
    }  

    const deleteTask = async(value) => {
      console.log(value)
      const data = {
        id : value.id,
        eta : value.eta,
        task: value.task,
        complete : value.complete
      }
      axios.delete ("http://127.0.0.1:8000/deleteTodo/", data)
      .then((response) => {
        const res = response.data;
        if (res.success === true) {
          getT();
        }
      });
    }
 

return (
      <>
    <section>
      <div>
        <input
          type="text"
          name="task"
          value={props.todo.task}
          onChange={handleChange}
        />
        <input
          type="date"
          name="eta"
          value={props.todo.eta}
          onChange={handleChange}
        />
        <button onClick={() => add()}> ADD TASK </button>
      </div>
    </section>
   
    <section>
      {props.todos.length > 0 && props.todos.map((value) => {
        return(
          <div style = {{display:'flex',alignItems:"center",justifyContent:"center"}} >
            <div>{value.task}</div>
            <div>{moment(value.eta).fromNow()}</div>
            <div>{value.complete===true? <input id = {value.id} type = "checkbox" checked/>:<input id = {value.id} type = "checkbox" onClick = {() => {checkFunction(value)}}/>}</div>
            <button type = "button" onClick = {() => {deleteTask(value)}}><FaTrash/></button>
          </div>
        )
      })}
    </section>
   
    </>
  );
}


const mapStateToProps = (state) => {
  
  return {
    todo: state.todo,
    todos : state.todos
  };
};


const mapDispatchToProps = (dispatch) => {
  return {
    addToDo: (obj) => dispatch(addToDo(obj)),
    updateToDo: (obj) => dispatch(updateToDo(obj)),
    deleteToDo: (obj) => dispatch(deleteToDo(obj)),
    getToDo: (arr) => dispatch(getToDo(arr)),
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(ToDoContainer);
