import { useTodosMethods } from 'contexts/todos/useTodos'
import { memo, useState } from 'react'
import './todoForm.scss'

const TodoForm = memo(() => {
  console.log('Render Form')

  const { addNewTodo } = useTodosMethods()

  const [title, setTitle] = useState('')
  const placeholder = 'Новая задача'

  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value)
  }

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
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
          size={placeholder.length}
        />
      </div>
    </form>
  )
})

export default TodoForm
