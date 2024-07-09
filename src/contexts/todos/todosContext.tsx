import { useMemo, createContext, PropsWithChildren, FC } from 'react'
import { Todo } from 'shared/types/types'
import useTodosState from './useTodosState'

export const TodosContext = createContext<Todo[]>([])
export const TodosMethodsContext = createContext(
  {} as Omit<ReturnType<typeof useTodosState>, 'todos'>,
)

export const TodosContextProvider: FC<PropsWithChildren> = ({ children }) => {
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
