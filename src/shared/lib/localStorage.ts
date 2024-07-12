import { LocalData, Todo } from 'shared/types/types'
import { dateStringFormat } from './utils'

export const CALENTODO_CACHE = 'CALENTODO_CACHE'
export const CALENTODO_USER = 'CALENTODO_USER'

const dateKeyFormat = (date: Date) => dateStringFormat(date).split(' ')[0]

export const getLocalData = (): LocalData => {
  const data = localStorage.getItem(CALENTODO_CACHE)
  return data ? JSON.parse(data) : {}
}

export const getCachedTodos = (date: Date, user: string) => {
  const localData = getLocalData()

  const userData = localData[user] ?? {}

  const dateFormatted = dateKeyFormat(date)

  if (Object.keys(userData).length) {
    return userData[dateFormatted] ?? []
  }
  return []
}

export const saveDataLocal = (todos: Todo[], date: Date, user: string) => {
  const localData = getLocalData()

  const userData = localData[user] ?? {}

  const newLocalData = {
    ...localData,
    [user]: {
      ...userData,
      [dateKeyFormat(date)]: todos,
    },
  }

  localStorage.setItem(
    CALENTODO_CACHE,
    JSON.stringify(newLocalData, null, '\t'),
  )
}
