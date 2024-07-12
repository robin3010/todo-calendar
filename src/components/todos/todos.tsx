import { FC } from 'react'
import useCalendar from 'contexts/calendar/useCalendar'
import { dateFull } from 'shared/lib/utils'
import './todos.scss'
import TodosList from './todos-list/todos-list'

const Todos: FC = () => {
  const { activeDate: date } = useCalendar()

  return (
    <>
      <div className="todos-heading-bg">
        <h3 className="todos-heading">
          <span>Список задач:</span>
          <span>{dateFull(date)}</span>
        </h3>
      </div>
      <TodosList />
    </>
  )
}

export default Todos
