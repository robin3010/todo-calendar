import clsx from 'clsx'
import useCalendar from 'contexts/calendar/useCalendar'
import { FC } from 'react'
import { dateYYYYMM } from 'shared/lib/utils'
import { CalendarGridProps } from 'shared/types/types'

const CalendarMonths: FC<CalendarGridProps> = ({ show }) => {
  const { activeDate, dateChangeHandler, months } = useCalendar()

  const getMonthClasses = (month: number) => {
    const today = new Date()

    return (
      dateYYYYMM(today) === dateYYYYMM(activeDate) && month === today.getMonth()
    )
  }

  const monthClickHandler = (month: number) => {
    dateChangeHandler(month)
    show(false)
  }

  return (
    <div className="calendar-months">
      <div className="calendar-months-grid">
        {months.map((month, index) => (
          <button
            type="button"
            className={clsx('calendar-months-grid__month', {
              'today-grid-tile': getMonthClasses(index),
            })}
            key={month}
            onClick={() => monthClickHandler(index)}
          >
            {month}
          </button>
        ))}
      </div>
    </div>
  )
}

export default CalendarMonths
