export interface CalendarGridProps {
  show: (param: boolean) => void
}

export interface Weekends {
  year: number
  values: number[]
}

export interface Todo {
  id: string
  done: boolean
  title: string
}

export type TodosByDate = {
  [k: string]: Todo[]
}
