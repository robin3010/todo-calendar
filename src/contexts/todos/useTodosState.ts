import useCalendar from 'contexts/calendar/useCalendar'
import { useCallback, useEffect, useState } from 'react'
import { Todo } from 'shared/types/types'
import useUser from 'contexts/user/useUser'
import { getCachedTodos, saveDataLocal } from '../../shared/lib/localStorage'

const useTodosState = () => {
  const { activeDate } = useCalendar()
  const { user } = useUser()

  const [todos, setTodos] = useState<Todo[]>(() =>
    getCachedTodos(activeDate, user),
  )

  useEffect(() => {
    saveDataLocal(todos, activeDate, user)
  }, [activeDate, todos, user])

  const addNewTodo = useCallback(
    (title: string) => {
      const newTodo = {
        id: crypto.randomUUID(),
        done: false,
        title,
      }

      setTodos((prev) => [newTodo, ...prev])
    },
    [setTodos],
  )

  const deleteTodo = useCallback(
    (id: string) => {
      setTodos((prev) => prev.filter((todo) => todo.id !== id))
    },
    [setTodos],
  )

  const editTodo = useCallback(
    (editedTodo: Partial<Todo>) => {
      setTodos((prev) => {
        const todosArr = prev.map((todo) => {
          return todo.id !== editedTodo.id
            ? todo
            : {
                ...todo,
                ...editedTodo,
              }
        })
        const sortedDone = [
          ...todosArr.filter((todo) => !todo.done),
          ...todosArr.filter((todo) => todo.done),
        ]

        return sortedDone
      })
    },
    [setTodos],
  )

  const clearTodosList = useCallback(() => {
    setTodos([])
  }, [setTodos])

  return {
    todos,
    addNewTodo,
    deleteTodo,
    editTodo,
    clearTodosList,
  }
}

export default useTodosState
