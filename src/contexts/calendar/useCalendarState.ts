import getWeekendsByYear from 'components/calendar/calendar-days/api/weekendsApi'
import { getDateElementNames, getMonthDays } from 'shared/lib/calendarUtils'
import { useCallback, useEffect, useState } from 'react'
import { dateYYYYMM } from 'shared/lib/utils'
import { Weekends } from 'shared/types/types'

const useCalendarState = () => {
  const [activeDate, setActiveDate] = useState<Date>(
    new Date(new Date().setHours(0, 0, 0, 0)),
  )

  const [isTodosOpen, setIsTodosOpen] = useState(false)
  const [days, setDays] = useState<Date[]>([])

  const months = getDateElementNames({ month: 'long' }, 'month', 12)
  const years = Array.from(
    { length: 10 },
    (_, k) => Math.floor(activeDate.getFullYear() / 10) * 10 + k,
  )

  const [weekends, setWeekends] = useState<Weekends | null>(null)

  useEffect(() => {
    let ignore = false

    const getDaysWithWeekends = async () => {
      const res = await getWeekendsByYear(activeDate)

      const weekendsArr = res.map((val) => +val)
      if (!ignore) {
        setWeekends({ year: activeDate.getFullYear(), values: weekendsArr })
      }
    }

    const getDaysList = () => {
      const daysRaw = getMonthDays(activeDate)

      if (days.length) {
        const firstDayOfMonth = (dates: Date[]) =>
          dates[dates.findIndex((day) => day.getDate() === 1)]

        const stateMonth = dateYYYYMM(firstDayOfMonth(days))
        const activeMonth = dateYYYYMM(activeDate)

        if (stateMonth !== activeMonth) {
          setDays(daysRaw)
        }
        return undefined
      }

      return setDays(daysRaw)
    }

    getDaysList()

    const currentYear = activeDate.getFullYear()

    if (days.length && (weekends === null || currentYear !== weekends.year)) {
      getDaysWithWeekends()
    }

    return () => {
      ignore = true
    }
  }, [activeDate, days, weekends])

  const isCalendarStart =
    activeDate.getTime() <= new Date(years[0], 1, 0).getTime()
  const isCalendarEnd =
    activeDate.getTime() >= new Date(years.at(-1) as number, 11, 1).getTime()

  const dateChangeHandler = useCallback((param: number) => {
    const changeMonth = (month: number) => {
      return setActiveDate((date) => {
        if (new Date(new Date(date).setMonth(month)).getMonth() === month)
          return new Date(date.setMonth(month))

        return new Date(date.getFullYear(), month + 1, 0)
      })
    }

    if (typeof param === 'number' && String(param).length > 2)
      return setActiveDate((date) => new Date(date.setFullYear(param)))

    return changeMonth(param)
  }, [])

  return {
    activeDate,
    setActiveDate,
    dateChangeHandler,
    days,
    weekends,
    months,
    years,
    isCalendarStart,
    isCalendarEnd,
    isTodosOpen,
    setIsTodosOpen,
  }
}

export default useCalendarState
