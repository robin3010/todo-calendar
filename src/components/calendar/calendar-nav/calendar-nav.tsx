import useCalendar from 'contexts/calendar/useCalendar'
import { FC, useEffect, useState } from 'react'
import { dateFull, dateYYYYMM } from 'shared/lib/utils'
import './calendar-nav.scss'

interface CalendarNavProps {
  showMonthsHandler: () => void
  showYearsHandler: () => void
}

const CalendarNav: FC<CalendarNavProps> = ({
  showMonthsHandler,
  showYearsHandler,
}) => {
  const {
    activeDate,
    setActiveDate,
    months,
    isCalendarStart,
    isCalendarEnd,
    dateChangeHandler,
  } = useCalendar()

  const isToday = dateYYYYMM(activeDate) === dateYYYYMM(new Date())
  const [todayStr, setTodayStr] = useState('')

  useEffect(() => {
    if (!isToday) setTodayStr('Сегодня')
    setTimeout(() => {
      setTodayStr(!isToday ? 'Сегодня' : dateFull(activeDate))
    }, 300)
  }, [activeDate, isToday])

  return (
    <div className="calendar-nav">
      <div className="calendar-nav-container selectors-container">
        <button
          className="calendar-nav-select"
          type="button"
          onClick={showMonthsHandler}
        >
          <span>{months[activeDate.getMonth()]}</span>
          <span className="icon" />
        </button>
        <button
          className="calendar-nav-select"
          type="button"
          onClick={showYearsHandler}
        >
          <span>{activeDate.getFullYear()}</span>
          <div className="icon" />
        </button>
      </div>
      <div className="calendar-nav-container">
        <button
          className="calendar-nav-btn-today"
          type="button"
          onClick={() => setActiveDate(new Date())}
          disabled={isToday}
        >
          {todayStr}
        </button>

        <button
          className="calendar-nav-btn-prev"
          type="button"
          onClick={() => dateChangeHandler(activeDate.getMonth() - 1)}
          disabled={isCalendarStart}
        >
          {}
          <span className="icon" />
        </button>
        <button
          className="calendar-nav-btn-next"
          type="button"
          onClick={() => dateChangeHandler(activeDate.getMonth() + 1)}
          disabled={isCalendarEnd}
        >
          {}
          <span className="icon" />
        </button>
      </div>
    </div>
  )
}

export default CalendarNav
