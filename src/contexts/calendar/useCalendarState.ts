import {
  getDateElementNames,
  getMonthDays,
} from 'components/calendar/lib/utils'
import { useCallback, useState } from 'react'

const useCalendarState = () => {
  const [activeDate, setActiveDate] = useState<Date>(new Date(2024, 6, 30))

  const days = getMonthDays(activeDate)
  const months = getDateElementNames({ month: 'long' }, 'month', 12)
  const years = Array.from(
    { length: 10 },
    (_, k) => Math.floor(activeDate.getFullYear() / 10) * 10 + k,
  )

  const isCalendarStart =
    activeDate.getTime() <= new Date(years[0], 1, 0).getTime()
  const isCalendarEnd =
    activeDate.getTime() >= new Date(years.at(-1) as number, 11, 1).getTime()

  const dateChangeHandler = useCallback(
    (param: number) => {
      const changeMonth = (month: number) => {
        if (new Date(new Date(activeDate).setMonth(month)).getMonth() === month)
          return setActiveDate((date) => new Date(date.setMonth(month)))

        return setActiveDate(
          (date) => new Date(date.getFullYear(), month + 1, 0),
        )
      }

      if (typeof param === 'number' && String(param).length > 2)
        return setActiveDate((date) => new Date(date.setFullYear(param)))

      return changeMonth(param)
    },
    [activeDate],
  )

  return {
    activeDate,
    dateChangeHandler,
    days,
    months,
    years,
    isCalendarStart,
    isCalendarEnd,
  }
}

export default useCalendarState
