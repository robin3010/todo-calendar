import { FC, PropsWithChildren, createContext, useMemo } from 'react'
import useCalendarState from './useCalendarState'

export const CalendarContext = createContext(
  {} as ReturnType<typeof useCalendarState>,
)

export const CalendarContextProvider: FC<PropsWithChildren> = ({
  children,
}) => {
  const calendarState = useCalendarState()

  const contextValues = useMemo(() => calendarState, [calendarState])
  return (
    <CalendarContext.Provider value={contextValues}>
      {children}
    </CalendarContext.Provider>
  )
}
