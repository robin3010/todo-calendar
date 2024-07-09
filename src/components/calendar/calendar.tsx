import { FC, useState } from 'react'
import useCalendar from 'contexts/calendar/useCalendar'
import CalendarDays from 'components/calendar/calendar-days/calendar-days'
import './calendar.scss'
import CalendarMonths from 'components/calendar/calendar-months/calendar-months'
import CalendarYears from 'components/calendar/calendar-years/calendar-years'

const Calendar: FC = () => {
  const {
    activeDate,
    dateChangeHandler,
    isCalendarStart,
    isCalendarEnd,
    months,
  } = useCalendar()

  const [isShowMonths, setIsShowMonths] = useState(false)
  const [isShowYears, setIsShowYears] = useState(false)

  const showMonthsHandler = () => {
    setIsShowYears(false)
    setIsShowMonths(true)
  }

  const showYearsHandler = () => {
    setIsShowMonths(false)
    setIsShowYears(true)
  }

  return (
    <main className="calendar">
      {/* <div className="calendar-header">
        {activeDate.toLocaleDateString(undefined, { dateStyle: 'long' })}
      </div> */}
      <div className="calendar-nav">
        <div className="calendar-nav-container">
          <button
            className="calendar-nav-select month-select"
            type="button"
            onClick={showMonthsHandler}
          >
            <span>{months[activeDate.getMonth()]}</span>
            <span>{`\u2BC6`}</span>
          </button>
          <button
            className="calendar-nav-select"
            type="button"
            onClick={showYearsHandler}
          >
            <span>{activeDate.getFullYear()}</span>
            <span>{`\u2BC6`}</span>
          </button>
        </div>
        <div className="calendar-nav-container">
          <button
            className="calendar-nav-btn"
            type="button"
            onClick={() => dateChangeHandler(activeDate.getMonth() - 1)}
            disabled={isCalendarStart}
          >
            {'\u2BC7'}
          </button>
          <button
            className="calendar-nav-btn"
            type="button"
            onClick={() => dateChangeHandler(activeDate.getMonth() + 1)}
            disabled={isCalendarEnd}
          >
            {'\u2BC8'}
          </button>
        </div>
      </div>
      {!isShowMonths && !isShowYears && <CalendarDays />}
      {isShowMonths && <CalendarMonths show={setIsShowMonths} />}
      {isShowYears && (
        <CalendarYears show={setIsShowYears} showMonths={setIsShowMonths} />
      )}
    </main>
  )
}

export default Calendar
