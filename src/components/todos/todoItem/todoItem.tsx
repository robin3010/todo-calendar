import { useTodosMethods } from 'contexts/todos/useTodos'
import './todoItem.scss'
import { FC, memo, useCallback, useEffect, useState } from 'react'
import { Todo } from 'shared/types/types'
import clsx from 'clsx'

const TodoItem: FC<Todo> = memo(({ id, title, done }) => {
  const { editTodo, deleteTodo } = useTodosMethods()
  const [titleInput, setTitleInput] = useState(title)

  const editTodoHandler = useCallback(
    (editedKey: Partial<Todo>) => {
      const editedTodo = { id, title, done, ...editedKey }
      editTodo(editedTodo)
    },
    [done, editTodo, id, title],
  )

  useEffect(() => {
    if (title !== titleInput) editTodoHandler({ title: titleInput })
  }, [editTodoHandler, title, titleInput])

  return (
    <li className={clsx('todo-item', done && 'done')}>
      <input
        className="todo-item__status-cbx"
        type="checkbox"
        checked={done}
        onChange={() => editTodoHandler({ done: !done })}
      />
      <input
        className="todo-item__title"
        type="text"
        value={titleInput}
        onChange={(e) => setTitleInput(e.target.value)}
      />
      <div className="todo-item__delete-btn">
        <button type="button" onClick={() => deleteTodo(id)}>
          {}
        </button>
      </div>
    </li>
  )
})

export default TodoItem
