import clsx from 'clsx'
import useCalendar from 'contexts/calendar/useCalendar'
import { FC } from 'react'
import { CalendarGridProps } from 'shared/types/types'

interface CalendarYearsProps extends CalendarGridProps {
  showMonths?: (param: boolean) => void
}

const CalendarYears: FC<CalendarYearsProps> = ({ show, showMonths }) => {
  const { dateChangeHandler, years } = useCalendar()

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
            className={clsx('calendar-years-grid__year', {
              'today-grid-tile': year === new Date().getFullYear(),
            })}
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
