import { useMemo, createContext, PropsWithChildren } from 'react'
import { Todo, useTodosState } from './useTodosState'

export const TodosContext = createContext<Todo[]>([])
export const TodosMethodsContext = createContext(
  {} as Omit<ReturnType<typeof useTodosState>, 'todos'>,
)

export const TodosContextProvider: React.FC<PropsWithChildren> = ({
  children,
}) => {
  const { todos, ...methods } = useTodosState()

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const methodsContext = useMemo(() => methods, [])

  return (
    <TodosContext.Provider value={todos}>
      <TodosMethodsContext.Provider value={methodsContext}>
        {children}
      </TodosMethodsContext.Provider>
    </TodosContext.Provider>
  )
}
