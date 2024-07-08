export const isLeapYearFunc = (year: number) =>
  (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0

export const daysInMonth = (date: Date) => {
  const month = date.getMonth() + 1
  const year = date.getFullYear()

  switch (month) {
    case 2:
      return isLeapYearFunc(year) ? 29 : 28
    case 4:
    case 6:
    case 9:
    case 11:
      return 30
    default:
      return 31
  }
}

export const getDateElementNames = (
  option: Intl.DateTimeFormatOptions,
  iterateElem: 'month' | 'day',
  length: number,
  localeName: string | undefined = undefined,
) => {
  const { format } = new Intl.DateTimeFormat(localeName, option)

  const iterateDate = (index: number) => {
    if (iterateElem === 'day') return new Date(2024, 0, index + 1)
    return new Date(2024, index, 1)
  }

  return Array.from({ length }, (_, k) =>
    format(iterateDate(k)).replace(/^./, (str) => str.toUpperCase()),
  )
}

const dayToMs = (day: number) => day * 864e5
const msToDay = (dateInMs: number) => dateInMs / 864e5

export const getMonthDays = (activeDay: Date) => {
  const startOfMonth = new Date(new Date(activeDay).setDate(1))

  const intervalStartDate = new Date(
    startOfMonth.getTime() - dayToMs((startOfMonth.getDay() || 7) - 1),
  )

  const daysToEndOfMonth =
    msToDay(
      new Date(activeDay).setDate(daysInMonth(activeDay)) -
        intervalStartDate.getTime(),
    ) + 1

  const length = daysToEndOfMonth + (7 - (daysToEndOfMonth % 7))

  return Array.from({ length }, (_, k) => {
    const currentDay = new Date(
      new Date(intervalStartDate).setTime(
        intervalStartDate.getTime() + dayToMs(k),
      ),
    )
    return currentDay
  })
}
