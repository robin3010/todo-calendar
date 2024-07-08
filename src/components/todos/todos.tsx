import TodosList from './todosList/todosList'
import './todos.scss'

const Todos = () => (
  <>
    <div className="todos-heading-bg">
      <h3 className="todos-heading">some date todos</h3>
    </div>
    <TodosList />
  </>
)

export default Todos
