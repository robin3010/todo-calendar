import { useTodosMethods } from 'contexts/todos/useTodos'
import { FC, FormEvent, memo, useState } from 'react'
import './todo-form.scss'

const TodoForm: FC = memo(() => {
  const { addNewTodo } = useTodosMethods()

  const [title, setTitle] = useState('')
  const placeholder = 'Новая задача'

  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const trimmedTitle = title.trim()
    if (trimmedTitle) {
      addNewTodo(trimmedTitle)
      setTitle('')
    }
  }

  return (
    <form onSubmit={submitHandler} className="todo-form">
      <div className="todo-form-container">
        <button className="todo-form__add-btn" type="submit">
          {}
          <span className="icon" />
        </button>
        <input
          type="text"
          className="todo-form__input"
          value={title}
          onChange={(e) => setTitle(e.target.value.trimStart())}
          placeholder={placeholder}
        />
      </div>
    </form>
  )
})

export default TodoForm
