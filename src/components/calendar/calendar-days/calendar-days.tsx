import { getDateElementNames } from 'components/calendar/lib/utils'
import Todos from 'components/todos/todos'
import useCalendar from 'contexts/calendar/useCalendar'
import { TodosContextProvider } from 'contexts/todos/todosContext'
import { FC, useState } from 'react'
import ModalContainer from 'shared/ui/modalContainer'

const CalendarDays: FC = () => {
  const { activeDate, setActiveDate, days } = useCalendar()

  const weekdays = getDateElementNames({ weekday: 'short' }, 'day', 7)

  const [isTodosOpen, setIsTodosOpen] = useState(false)

  const getDayClasses = (day: Date) => {
    const isActive = day.toDateString() === activeDate.toDateString()
    const isDayOfCurrentMonth = day.getMonth() === activeDate.getMonth()

    return `${isActive ? ' active-grid-tile' : ''}${!isDayOfCurrentMonth ? ' trailing-grid-day' : ''}`
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
            className={`calendar-days-grid__day btn${getDayClasses(day)}`}
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
