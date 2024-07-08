import { useTodos } from 'contexts/todos/useTodos'
import TodoItem from '../todoItem/todoItem'
import TodoForm from '../todoForm/todoForm'
import './todosList.scss'

const TodosList = () => {
  console.log('Render TodoList')

  const todos = useTodos()

  // if (!todos.length) {
  //   return <p className="todos-list">No todos here...</p>
  // }

  return (
    <ol className="todos-list">
      <TodoForm />
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          id={todo.id}
          title={todo.title}
          done={todo.done}
        />
      ))}
    </ol>
  )
}

export default TodosList
