import { Outlet, Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex flex-col h-screen">
      <nav className="flex h-[8%] items-center p-5">
        <div className="w-20">
          {/* Image Goes Here */}
        </div>
        <ul className="flex flex-row gap-2 ">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/todo-boards">Todo Board Types</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  )
};

export default Navbar;