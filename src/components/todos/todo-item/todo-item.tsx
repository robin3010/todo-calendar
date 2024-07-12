import { useTodosMethods } from 'contexts/todos/useTodos'
import './todo-item.scss'
import { FC, memo, useCallback, useEffect, useState } from 'react'
import { Todo } from 'shared/types/types'
import clsx from 'clsx'

const TodoItem: FC<Todo> = memo(({ id, title, done }) => {
  const { editTodo, deleteTodo } = useTodosMethods()
  const [titleInput, setTitleInput] = useState(title)
  const [savedValue, setSavedValue] = useState('')

  const editTodoHandler = useCallback(
    (editedKey: Partial<Todo>) => {
      const editedTodo = { id, title, done, ...editedKey }
      editTodo(editedTodo)
    },
    [done, editTodo, id, title],
  )

  useEffect(() => {
    if (titleInput && title !== titleInput)
      editTodoHandler({ title: titleInput })
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
        onKeyDown={(e) => {
          if (e.key === 'Escape') {
            e.stopPropagation()
            e.currentTarget.blur()
          }
        }}
        onChange={(e) => setTitleInput(e.target.value.trimStart())}
        onFocus={() => setSavedValue(title)}
        onBlur={() => {
          if (!titleInput) {
            setTitleInput(savedValue)
          }
          setTitleInput(titleInput.trim())
        }}
      />
      <button
        className="todo-item__delete-btn"
        type="button"
        onClick={() => deleteTodo(id)}
      >
        {}
        <span className="icon" />
      </button>
    </li>
  )
})

export default TodoItem
