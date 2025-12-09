import React, { useEffect, useRef, useState } from 'react'
import axios from 'axios';
import Loader from './componenets/Loader';
import TodoCard from './componenets/TodoCard';

const firebase_url = "https://practise-todo-project-default-rtdb.asia-southeast1.firebasedatabase.app/"
function App() {
  let inputdata = useRef(null);
  let [todos, setTodos] = useState([])
  let [buttonStatus, setButtonStatus] = useState(false);

  let clickHandler = ()=>{
    setButtonStatus(true);
    let task = inputdata.current.value;
    axios.post(`${firebase_url}Todos.json`,{
      taskName : task,
    }).then(()=>{
      setButtonStatus(false);
      fetchTodos();
    })
    console.log(task);
  }
  function fetchTodos(){
    axios.get(`${firebase_url}Todos.json`).then((todos)=>{
      //console.log(todos.data);
      let tempTodos = [];
      for(let key in todos.data){
        let todo = {
          id: key,
          ...todos.data[key]
        }
        //console.log(todo);
        tempTodos.push(todo);
      }
      //console.log(tempTodos);
       setTodos(tempTodos);
    })
  }
  function deleteHandler(id){
    //console.log('task is deleted')
    axios.delete(`${firebase_url}Todos/${id}.json`).then(()=>{
      fetchTodos();
    })
  }
  useEffect(()=>{
    fetchTodos();
  },[])
  return (
    <>
      <header>
            <div className="bg-purple-500 shadow p-4 w-full">
                <p className='text-lg text-center text-white'>“Every great day begins with a clear plan—start yours by organizing your tasks here.”</p>
            </div>
      </header>
      <section>
          <div className='w-[500px] mb-8 p-5 rounded-xl mx-auto mt-18 bg-purple-50'>
            <h1 className='text-2xl text-center font-bold text-neutral-900 mb-2 truncate'>Manage your Tasks here @Buddy!</h1>
            <p className='text-neutral-600 mb-3'>Your day deserves smarter organization.
              Track tasks, set priorities, and stay effortlessly disciplined.
              Experience productivity designed to elevate your routine.
            </p>
            <input ref={inputdata} className='px-4 border border-purple-400 py-3 w-full rounded-xl hover:outline-0 mb-4 hover:ring-2 hover:ring-purple-300 outline-none' type="text" placeholder='Add a Task...' />
            <button onClick={clickHandler} className='bg-purple-400 hover:bg-purple-900 cursor-pointer text-white rounded-xl px-4 py-2'>{buttonStatus ? <Loader/> : "Create Task"}</button>
        </div>
        <div>
          {
            todos.map((todo)=><TodoCard deleteHandler={deleteHandler} id={todo.id} taskName={todo.taskName} key={todo.id}/>)
          }
        </div>
      </section>
    </>
  )
}

export default App
