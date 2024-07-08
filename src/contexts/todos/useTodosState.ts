import { useCallback, useEffect, useState } from 'react'

const LS_TODO_LIST = 'LS_TODO_LIST'

export interface Todo {
  id: string
  done: boolean
  title: string
}

export const useTodosState = () => {
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

  const changeTodoStatus = useCallback(
    (id: string) => {
      setTodos((prev) =>
        prev.map((todo) => {
          return todo.id !== id
            ? todo
            : {
                ...todo,
                done: !todo.done,
              }
        }),
      )
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
    changeTodoStatus,
    clearTodosList,
  }
}
