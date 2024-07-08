import { getDateElementNames } from 'components/calendar/lib/utils'
import useCalendar from 'contexts/calendar/useCalendar'

const CalendarDays: React.FC = () => {
  const { activeDate, days } = useCalendar()

  const weekdays = getDateElementNames({ weekday: 'short' }, 'day', 7)

  const getDayClasses = (day: Date) => {
    const isActive = day.toDateString() === activeDate.toDateString()
    const isDayOfCurrentMonth = day.getMonth() === activeDate.getMonth()

    return `${isActive ? ' active-grid-tile' : ''}${!isDayOfCurrentMonth ? ' trailing-grid-day' : ''}`
  }

  // const dayClickHandler = (day: Date) => {
  //   setActiveDay(new Date(day))
  // }

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
            // onClick={() => dayClickHandler(day)}
          >
            {day.getDate()}
          </button>
        ))}
      </div>
    </div>
  )
}

export default CalendarDays
