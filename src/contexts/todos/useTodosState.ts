import useCalendar from 'contexts/calendar/useCalendar'
import { useCallback, useEffect, useState } from 'react'
import { Todo } from 'shared/types/types'
import { getCachedTodos, saveDataLocal } from '../../shared/lib/localStorage'

const useTodosState = () => {
  const { activeDate } = useCalendar()

  const [todos, setTodos] = useState<Todo[]>(() => getCachedTodos(activeDate))

  useEffect(() => {
    saveDataLocal(todos, activeDate)
  }, [activeDate, todos])

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

  // const todosByDate = (date: Date) => todos.

  return {
    todos,
    addNewTodo,
    deleteTodo,
    editTodo,
    clearTodosList,
  }
}

export default useTodosState
