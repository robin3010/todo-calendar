export const dateStringFormat = (date: Date) => date.toLocaleString('sv')

export const dateYYYYMM = (date: Date) => {
  const regex = /\d{4}-\d{2}/g

  return dateStringFormat(date).match(regex)![0]
}

export const dateYYYYMMDD = (date: Date) =>
  dateStringFormat(date).replaceAll('-', '').split(' ')[0]

export const dateFull = (date: Date) => {
  const options: Intl.DateTimeFormatOptions = {
    day: 'numeric',
    month: 'long',
  }
  const { format } = new Intl.DateTimeFormat(undefined, options)
  return `${format(date)} ${date.getFullYear()}`
}
