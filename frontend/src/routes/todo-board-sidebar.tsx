import { Outlet, useLocation } from "react-router-dom";
import SortingRadio from "../components/SortingRadio";
import NaviationLink from "../components/NavigationLink";

const Sidebar = () => {
  const location = useLocation();

  return (
    <div className="flex flex-row w-screen h-full dark:bg-slate-800">
      <nav className="flex flex-col w-1/6 xl:w-[8%] py-12 border-r-2 border-slate-500 justify-between items-center">
        <div>
          <h1 className="dark:text-white font-bold text-2xl">Navigation</h1>
          <ul className="flex flex-col gap-3">
            <li>
              <NaviationLink
                to="/todo-boards/list"
                title="List of Todos"
                type="Sidebar"
              />
            </li>
            <li>
              <NaviationLink
                to="/todo-boards/board"
                title="Todo Boards"
                type="Sidebar"
              />
            </li>
            <li>
              <NaviationLink
                to="/todo-boards/calendar"
                title="Calendar"
                type="Sidebar"
              />
            </li>
          </ul>
        </div>
        {location.pathname === "/todo-boards/list" ? (
          <div className="flex flex-col w-full pl-4">
            <h1 className="dark:text-white font-bold text-2xl">Sorting</h1>
            <div className="flex flex-col dark:text-gray-100">
              <SortingRadio title="Title" inputName="sorting" />
              <SortingRadio title="Type" inputName="sorting" default={true} />
              <SortingRadio title="Priority" inputName="sorting" />
              <SortingRadio title="Deadline" inputName="sorting" />
            </div>
          </div>
        ) : (
          <div></div>
        )}
      </nav>
      <div className="w-5/6 xl:w-[92%] dark:bg-slate-900">
        <Outlet />
      </div>
    </div>
  );
};

export default Sidebar;
