import { useState } from 'react'
import './App.css'


import { useDispatch} from 'react-redux'
import {addTodo,removeTodo} from './features/todo/todoslice'

import { useSelector } from 'react-redux'


function App() {
  const [content, setContent] = useState("");
  
  const dispatch = useDispatch();
  const array= useSelector(state=> state.todos)

  const addcontent = (e) =>{
    e.preventDefault();
    if(content.trim()=== "")return;
    dispatch(addTodo(content));
    setContent("");
  }

  return (
    <>
     <div className="todo-container"  >
      <h2> TODO APP</h2>
      <div className="crud"  >

        <div className="add">
          <input
            type="text"
            placeholder="Enter the name"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
          <button className="add-btn"  onClick={addcontent}
            >ADD</button>
        </div>

       
        <div className="del">
          
          {array.map((todo) => (
            <div key={todo.id} className="content">
             <span className="content-text">{todo.text}</span>
            <button className="del-btn" onClick={()=> dispatch(removeTodo(todo.id))}>Delete</button>
             
            </div>
          ))}
        </div>

      </div>
    </div>
    </>
  )
}

export default App
