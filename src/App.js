import logo from './logo.svg';
import './App.css';
import Nav from './views/Nav';
import { useState, useEffect } from 'react';
import Todo from './views/Todo';
import Covid from './views/Covid';
const App = () => {
  //state
  const [address, setAddress] = useState('')
    const [todos, setTodos] = useState([
    {id: 'todo1',title:'watching TV', type: 'anh'},
    {id: 'todo2',title:'Doing homework', type: 'anh'},
    {id: 'todo3',title:'Playing game', type: 'not anh'},
  ])

  useEffect(() => {
   
 })
  const handleEventClick = (event) => {
    if(!address){
      alert('emtpy input')
      return
    }
    let newTodo = {
      id:  Math.floor(Math.random() * 10000) + 1, title: address, type: 'anh'}
    setTodos([...todos, newTodo])
    setAddress('')
  }
  const handleOnchangeInput = (event) => {
    setAddress(event.target.value)
  }
 const deleteDataTodo = (id) => {
    let currentTodos = todos;
    currentTodos = todos.filter(items => items.id !== id)
    setTodos(currentTodos)
  }
  return (
    <div className="App">
      <Nav />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Hello world with React and {address}!</h1>
        <Covid />
        {/* <Todo todos={todos} deleteDataTodo={deleteDataTodo} />
        <Todo
          todos={todos.filter((items) => items.type === "anh")}
          deleteDataTodo={deleteDataTodo}
        />
        <input
          type="text"
          value={address}
          onChange={(event) => handleOnchangeInput(event)}
        />
        <button type="button" onClick={(event) => handleEventClick()}>
          Click me
        </button> */}
      </header>
    </div>
  );
}

export default App;
