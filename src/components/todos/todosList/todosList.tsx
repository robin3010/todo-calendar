import { useTodos } from 'contexts/todos/useTodos'
import { FC } from 'react'
import TodoItem from '../todoItem/todoItem'
import TodoForm from '../todoForm/todoForm'
import './todosList.scss'

const TodosList: FC = () => {
  const todos = useTodos()

  return (
    <ol className="todos-list">
      <TodoForm />
      {!todos.length && <p className="todos-list">Нет задач...</p>}
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
