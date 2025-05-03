import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'
function App() {
  const [count, setCount] = useState(0)
  const [edit,setEdit] = useState(false); 
  const [editId, setEditId] = useState(null);
  const [editText, setEditText] = useState('');
  const [newTodo,setNewTodo] = useState("");
  const [todos,setTodos] = useState([]);

  useEffect(() => {
    const fetchTodo = async () => {
      const res = await axios.get("http://localhost:8000/todo")
      console.log(res.data);
      setTodos(res.data)
    }
    
    fetchTodo()

  },[todos])
  const handleAdd = async (todo) => {
    try{
      const todos = {
        name : todo
      }
      const res = await axios.post("http://localhost:8000/todo",todos)
      console.log("Data Saved: ",res.data);
      
    }
    catch{
      console.error("Error")
    }
    const newTodo = {id: todos.length+1 , name:todo}
    setNewTodo("");
  }
  const confirmEdit = async (todo) => {
    try{

    }
    catch(err){

    }
  }
  const handleInputChange = (e) => {
    setEditText(e.target.value)
  }
  const handleEditClick = async (todo) => {
    setEditId(todo.id);
    setEditText(todo.name);
  }
  const handleSave = (id) => {
    const confirmEdit = async () => {
      try{
        const data = {
          id : id,
          name : editText
        }
        const res = await axios.patch("http://localhost:8000/todo",data)
        console.log("Data Saved : ",res);
        
      }
      catch(err){
        console.log(err);
        
      }
    }
    confirmEdit();
    setTodos(prev => prev.map((todo) => id === todo.id? {...todo , name : editText} : todo))
    setEditId(null);
    setEditText("");

  }
  const handleDelete = async (id) => {
    try{
      const res = await axios.delete(`http://localhost:8000/todo/${id}`)
      console.log("Deleted: " , res);
      
    }
    catch{

    }
  }
  return (
    <>
      <div className='w-screen h-screen bg-blue-950 flex justify-center items-center'>
        <div className='flex flex-col items-center justify-center bg-gray-200 h-1/2 w-1/2 border-2'>
        <h1 className = "text-3xl">Todo List</h1>
          <div className='flex'>
            <input type="text" className='w-full p-4 bg-white' value={newTodo} onChange={(e) => setNewTodo(e.target.value)}/>
            <button className='w-1/2 bg-green-300' onClick={() => handleAdd(newTodo)}>Add Todo</button>
          </div>
          <div className='bg-white h-auto w-full min-h-[300px] border-1'>
              {todos.map((todo,index) => 
              <div key={index} className=''>
                {editId === todo.id ? 
                <div className='flex'>
                  <input 
                    value={editText}
                    onChange={handleInputChange}
                    className='w-full bg-gray-300 border-2'
                  />
                  <button onClick={() => handleSave(todo.id)} className='p-4 bg-green-400'>Save</button>
                </div>
                :
                <div className='flex'>
                  <h1 className='w-full bg-gray-300'>{todo.name}</h1>
                  <button onClick={() => handleEditClick(todo)} className='p-4 bg-yellow-400'>Edit</button>
                  <button onClick={() => handleDelete(todo.id)} className='p-4 bg-red-500'>Delete</button>
                </div>
                }
              </div>
              
              )
              }
            
          </div>
        </div>

      </div>
    </>
  )
}

export default App
