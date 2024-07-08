import useCalendar from 'contexts/calendar/useCalendar'
import { CalendarGridProps } from 'shared/types/types'

const CalendarMonths: React.FC<CalendarGridProps> = ({ show }) => {
  const { activeDate, dateChangeHandler, months } = useCalendar()

  const getMonthClasses = (month: number) => {
    const isActive = month === activeDate.getMonth()

    return isActive ? ' active-grid-tile' : ''
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
            className={`calendar-months-grid__month${getMonthClasses(index)}`}
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
