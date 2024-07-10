import { useTodosMethods } from 'contexts/todos/useTodos'
import { ChangeEvent, FC, FormEvent, memo, useState } from 'react'
import './todoForm.scss'

const TodoForm: FC = memo(() => {
  const { addNewTodo } = useTodosMethods()

  const [title, setTitle] = useState('')
  const placeholder = 'Новая задача'

  const inputHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value)
  }

  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (title.length) {
      addNewTodo(title)
      setTitle('')
    }
  }

  return (
    <form onSubmit={submitHandler} className="todo-form">
      <div className="todo-form-container">
        <div className="todo-form__add-btn">
          <button type="submit">{}</button>
        </div>
        <input
          type="text"
          className="todo-form__input"
          value={title}
          onChange={inputHandler}
          placeholder={placeholder}
        />
      </div>
    </form>
  )
})

export default TodoForm
