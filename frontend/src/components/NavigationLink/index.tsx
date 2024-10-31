import { Link } from "react-router-dom";

type Props = {
  title: string;
  to: string;
  type: string;
};

const NaviationLink = (props: Props) => {
  return (
    <Link
      to={props.to}
      className={`flex h-10 px-3 font-semibold text-lg justify-start items-center dark:bg-slate-700 dark:text-gray-300 hover:bg-slate-600 ${
        props.type === "Sidebar" ? `rounded-full` : ``
      }`}
    >
      {props.title}
    </Link>
  );
};

export default NaviationLink;
