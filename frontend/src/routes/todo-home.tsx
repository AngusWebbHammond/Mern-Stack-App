import { Link } from "react-router-dom"

const TodoHome = () => {
  return (
    <nav>
        <ul>
          <li>
            <Link to="/todo-boards/list">List of Todos</Link>
          </li>
          <li>
            <Link to="/todo-boards/board">Todo Boards</Link>
          </li>
        </ul>
      </nav>
  )
}

export default TodoHome