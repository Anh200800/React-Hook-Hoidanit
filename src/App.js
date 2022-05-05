import logo from './logo.svg';
import './App.css';
import Nav from './views/Nav';
import { useState, useEffect } from 'react';
import Todo from './views/Todo';
import Covid from './views/Covid';
import {CountDown, NewCountDown} from './views/Countdown';
import Blog from './views/Blog';
import DetailBlog from './views/DetailBlog';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
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
    <Router>
    <div className="App">
      <Nav />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        <h1>Hello world with React and {address}!</h1>
       
      </header>
      
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
            <div className='background'>

        <Switch>
          <Route path="/" exact>
            <Covid />
          </Route>
          <Route path="/timer">
             <CountDown />
        <hr />
        <NewCountDown/>
          </Route>
          <Route path="/todo">
        <Todo todos={todos} deleteDataTodo={deleteDataTodo} />
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
        </button>
          </Route>
          <Route path="/blog" exact>
            <Blog />
          </Route>
          <Route path="/blog/:id">
            <DetailBlog />
          </Route>
        </Switch>
            </div>
    </div>

    </Router>
  );
}

export default App;
