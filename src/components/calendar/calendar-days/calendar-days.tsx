import clsx from 'clsx'
import Todos from 'components/todos/todos'
import useCalendar from 'contexts/calendar/useCalendar'
import { TodosContextProvider } from 'contexts/todos/todosContext'
import { FC } from 'react'
import ModalContainer from 'shared/ui/modalContainer'
import { getCachedTodos } from 'shared/lib/localStorage'
import { dayOfYear, getDateElementNames } from 'shared/lib/calendarUtils'

const CalendarDays: FC = () => {
  const {
    activeDate,
    setActiveDate,
    days,
    weekends,
    isTodosOpen,
    setIsTodosOpen,
  } = useCalendar()

  const weekdays = getDateElementNames({ weekday: 'short' }, 'day', 7)

  const getDayClasses = (day: Date) => {
    const isToday = day.toDateString() === new Date().toDateString()
    const isDayOfCurrentMonth = day.getMonth() === activeDate.getMonth()
    const isTodos = !!getCachedTodos(day).length
    const isWeekend = weekends && weekends.values[dayOfYear(day)]

    return {
      'today-grid-tile': isToday,
      'trailing-grid-day': !isDayOfCurrentMonth,
      'have-todos': isTodos,
      weekend: !!isWeekend,
    }
  }

  const openTodosHandler = (day: Date) => {
    setActiveDate(day)
    setIsTodosOpen(true)
  }

  return (
    <div className="calendar-days">
      <div className="calendar-weekdays-grid">
        {weekdays.map((weekday) => (
          <div className="calendar-weekdays-grid__weekday" key={weekday}>
            {weekday}
          </div>
        ))}
      </div>
      <div className="calendar-days-grid">
        {days.map((day) => (
          <button
            type="button"
            className={clsx('calendar-days-grid__day btn', getDayClasses(day))}
            key={day.getTime()}
            onClick={() => openTodosHandler(day)}
          >
            {day.getDate()}
          </button>
        ))}
      </div>
      <ModalContainer
        isOpen={isTodosOpen}
        closeHandler={() => setIsTodosOpen(false)}
      >
        <TodosContextProvider>
          <Todos />
        </TodosContextProvider>
      </ModalContainer>
    </div>
  )
}

export default CalendarDays
