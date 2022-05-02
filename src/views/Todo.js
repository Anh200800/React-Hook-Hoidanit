
const Todo = (props) => {
  const { todos, deleteDataTodo } = props;
 const handleDelete = (id) => {
    deleteDataTodo(id)
  }
    return(
        <div className='todos-container'>
          {todos.map((todo) => {
            return(
              <li className='todo-child' key={todo.id}>{todo.title} <span onClick={() => handleDelete(todo.id)}>X</span></li>
            )
          })}
        <hr />
        </div>
    )
}
export default Todo;