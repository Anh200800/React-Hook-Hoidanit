import logo from './logo.svg';
import './App.css';
import Nav from './views/Nav';
import { useState } from 'react';
import Todo from './views/Todo';
const App =() => {
  const [address, setAddress] = useState('')
    const [todos, setTodos] = useState([
    {id: 'todo1',title:'watching TV'},
    {id: 'todo2',title:'Doing homework'},
    {id: 'todo3',title:'Playing game'},
  ])

 
  const handleEventClick = (event) => {
    if(!address){
      alert('emtpy input')
      return
    }
    let newTodo = {id: 'abc', title: address}
    setTodos([...todos, newTodo])
    setAddress('')
  }
  const handleOnchangeInput = (event) => {
    setAddress(event.target.value)
  }
  return (
    <div className="App">
      <Nav />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Hello world with React and {address}!</h1>
        <Todo 
        todos={todos}/>
<input type="text" value={address} onChange={(event)=>handleOnchangeInput(event)} />
        <button type='button' onClick={(event)=> handleEventClick()}>Click me</button>
      </header>
    </div>
  );
}

export default App;
