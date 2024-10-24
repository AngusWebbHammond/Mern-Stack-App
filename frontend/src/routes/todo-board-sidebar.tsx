import { Link, Outlet } from "react-router-dom"

const Sidebar = () => {
  return (
    <div className="flex flex-row w-screen h-[92%]">
      <nav className="flex w-1/6 xl:w-[8%] justify-center">
        <ul>
          <li>
            <Link to="/todo-boards/list">List of Todos</Link>
          </li>
          <li>
            <Link to="/todo-boards/board">Todo Boards</Link>
          </li>
        </ul>
      </nav>
      <div className="w-5/6 xl:w-[92%]">
        <Outlet/>
      </div>
    </div>
  )
}

export default Sidebar