import { Outlet } from "react-router-dom"
import SidebarLink from "../components/SidebarLink"

const Sidebar = () => {
  return (
    <div className="flex flex-row w-screen h-full dark:bg-slate-800">
      <nav className="flex flex-col w-1/6 xl:w-[8%] py-12 border-r-2 border-slate-500 justify-start items-center">
        <h1 className="dark:text-white font-bold text-2xl">Naviagtion</h1>
        <ul className="flex flex-col gap-3 w-fit">
          <li>
            <SidebarLink to="/todo-boards/list" title="List of Todos"/>
          </li>
          <li>
            <SidebarLink to="/todo-boards/board" title="Todo Boards"/>
          </li>
        </ul>
      </nav>
      <div className="w-5/6 xl:w-[92%] dark:bg-slate-900">
        <Outlet/>
      </div>
    </div>
  )
}

export default Sidebar