import { createContext, PropsWithChildren, FC } from 'react'
import useUserState from './useUserState'

export const UserContext = createContext({} as ReturnType<typeof useUserState>)

export const UserContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const userState = useUserState()

  return (
    <UserContext.Provider value={userState}>{children}</UserContext.Provider>
  )
}
