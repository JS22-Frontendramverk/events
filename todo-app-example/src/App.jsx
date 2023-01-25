import './App.css'

import TodoItem from './components/TodoItem/TodoItem';
import AddTodo from './components/AddTodo/AddTodo';

function App() {
  const todos = [];

  function newTodo(todo) {
    todos.push(todo);
    console.log(todos);
  }

  return (
    <div className="App">
      <ul className='todos'>
        <TodoItem task="Köp kaffe" done={ true } />
        <TodoItem task="Köp kaka"  done={ false } />
        <TodoItem task="Brygg kaffe" done={ false } />
        <TodoItem task="Drick kaffe" done={ false } />
      </ul>
      <AddTodo newTodo={ newTodo } />
    </div>
  )
}

export default App
