import useCalendar from 'contexts/calendar/useCalendar'
import { CalendarGridProps } from 'shared/types/types'

interface CalendarYearsProps extends CalendarGridProps {
  showMonths?: (param: boolean) => void
}

const CalendarYears: React.FC<CalendarYearsProps> = ({ show, showMonths }) => {
  const { activeDate, dateChangeHandler, years } = useCalendar()

  const getYearClasses = (year: number) => {
    const isActive = year === activeDate.getFullYear()

    return isActive ? ' active-grid-tile' : ''
  }

  const yearClickHandler = (year: number) => {
    dateChangeHandler(year)
    if (showMonths) showMonths(true)
    show(false)
  }

  return (
    <div className="calendar-years">
      <div className="calendar-years-grid">
        {years.map((year) => (
          <button
            type="button"
            className={`calendar-years-grid__year${getYearClasses(+year)}`}
            key={year}
            onClick={() => yearClickHandler(+year)}
          >
            {year}
          </button>
        ))}
      </div>
    </div>
  )
}

export default CalendarYears
