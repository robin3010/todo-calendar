import { FC, useState } from 'react'
import CalendarDays from 'components/calendar/calendar-days/calendar-days'
import './calendar.scss'
import CalendarMonths from 'components/calendar/calendar-months/calendar-months'
import CalendarYears from 'components/calendar/calendar-years/calendar-years'
import CalendarNav from './calendar-nav/calendar-nav'

const Calendar: FC = () => {
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
      <CalendarNav
        showMonthsHandler={showMonthsHandler}
        showYearsHandler={showYearsHandler}
      />
      {!isShowMonths && !isShowYears && <CalendarDays />}
      {isShowMonths && <CalendarMonths show={setIsShowMonths} />}
      {isShowYears && (
        <CalendarYears show={setIsShowYears} showMonths={setIsShowMonths} />
      )}
    </main>
  )
}

export default Calendar
