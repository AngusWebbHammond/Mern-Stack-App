import { Outlet } from "react-router-dom";
import NaviationLink from "../components/NavigationLink";

const Navbar = () => {
  return (
    <div className="flex flex-col h-screen dark:bg-slate-800">
      <nav className="flex h-[8%] items-center  border-b-2 border-slate-500 gap-3">
        <div className="flex h-full w-1/6 xl:w-[8%] text-white font-bold text-3xl border-r-2 border-slate-500 justify-center items-center">
          Todos
        </div>
        <ul className="flex flex-row gap-2">
          <li>
            <NaviationLink to="/" title="Home" type=""/>
          </li>
          <li>
            <NaviationLink to="/todo-boards/board" title="Todo Board Types" type=""/>
          </li>
        </ul>
      </nav>
      <div className="dark:bg-slate-900 h-[92%]">
        <Outlet />
      </div>
    </div>
  )
};

export default Navbar;