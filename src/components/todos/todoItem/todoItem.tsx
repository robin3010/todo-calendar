import { useTodosMethods } from 'contexts/todos/useTodos'
import { Todo } from 'contexts/todos/useTodosState'
import './todoItem.scss'
import { memo } from 'react'

const TodoItem: React.FC<Todo> = memo(({ id, title, done }) => {
  const { changeTodoStatus, deleteTodo } = useTodosMethods()

  // const changeStatusHandler = (e: React.ChangeEvent<HTMLInputElement>) => {

  //   changeTodoStatus(id)
  // }

  return (
    <li className="todo-item">
      <input
        className="todo-item__status-cbx"
        type="checkbox"
        checked={done}
        onChange={() => changeTodoStatus(id)}
      />
      <input className="todo-item__title" type="text" value={title} readOnly />
      <div className="todo-item__edit-btn">
        <button
          type="button"
          // onClick={() => deleteTodo(id)}
        >
          {}
        </button>
      </div>
      <div className="todo-item__delete-btn">
        <button type="button" onClick={() => deleteTodo(id)}>
          {}
        </button>
      </div>
    </li>
  )
})

export default TodoItem
