import { useContext } from 'react'
import { TodosContext, TodosMethodsContext } from './todosContext'

export const useTodos = () => useContext(TodosContext)
export const useTodosMethods = () => useContext(TodosMethodsContext)
