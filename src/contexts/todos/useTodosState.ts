import { useCallback, useEffect, useState } from 'react'
import { Todo } from 'shared/types/types'

const LS_TODO_LIST = 'LS_TODO_LIST'

const useTodosState = () => {
  const [todos, setTodos] = useState<Todo[]>(() => {
    const getStoredTodos = localStorage.getItem(LS_TODO_LIST)
    const fillTodoList = getStoredTodos ? JSON.parse(getStoredTodos) : []

    return fillTodoList
  })

  useEffect(() => {
    localStorage.setItem(LS_TODO_LIST, JSON.stringify(todos))
  }, [todos])

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
