import { PropsWithChildren, createContext } from 'react'
import useCalendarState from './useCalendarState'

export const CalendarContext = createContext(
  {} as ReturnType<typeof useCalendarState>,
)

export const CalendarContextProvider: React.FC<PropsWithChildren> = ({
  children,
}) => {
  return (
    <CalendarContext.Provider value={useCalendarState()}>
      {children}
    </CalendarContext.Provider>
  )
}
