import { Outlet } from "react-router-dom"
import SidebarLink from "../components/SidebarLink"

const Sidebar = () => {
  return (
    <div className="flex flex-row w-screen h-[92%] dark:bg-slate-800">
      <nav className="flex w-1/6 xl:w-[8%] justify-center py-12">
        <ul className="flex flex-col gap-3">
          <li>
            <SidebarLink to="/todo-boards/list" title="List of Todos"/>
          </li>
          <li>
            <SidebarLink to="/todo-boards/board" title="Todo Boards"/>
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