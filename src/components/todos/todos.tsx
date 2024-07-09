import { FC } from 'react'
import useCalendar from 'contexts/calendar/useCalendar'
import TodosList from './todosList/todosList'
import './todos.scss'

const Todos: FC = () => {
  const { activeDate: date } = useCalendar()

  return (
    <>
      <div className="todos-heading-bg">
        <h3 className="todos-heading">
          <span>Список задач:</span>
          <span>
            {date.toLocaleDateString(undefined, { dateStyle: 'long' })}
          </span>
        </h3>
      </div>
      <TodosList />
    </>
  )
}

export default Todos
