import { Todo, TodosByDate } from 'shared/types/types'
import { dateStringFormat } from './utils'

export const CALENTODO_CACHE = 'CALENTODO_CACHE'

const dateKeyFormat = (date: Date) => dateStringFormat(date).split(' ')[0]

export const getLocalData = (): TodosByDate => {
  const data = localStorage.getItem(CALENTODO_CACHE)

  return data ? JSON.parse(data) : {}
}

export const getCachedTodos = (date: Date) => {
  const localData = getLocalData()

  const dateFormatted = dateKeyFormat(date)

  return localData[dateFormatted as keyof typeof localData] || []
}

export const saveDataLocal = (todos: Todo[], date: Date) => {
  const localData = getLocalData()
  const newLocalData = {
    ...localData,
    [dateKeyFormat(date)]: todos,
  }

  localStorage.setItem(
    CALENTODO_CACHE,
    JSON.stringify(newLocalData, null, '\t'),
  )
}
