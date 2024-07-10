const getWeekendsByYear = async (date: Date) => {
  const year = date.getFullYear()

  const api = `https://isdayoff.ru/api/getdata?year=${year}&delimeter=,`

  const response = await fetch(api)
  const data = await response.text()

  return data.split(',')
}

export default getWeekendsByYear
