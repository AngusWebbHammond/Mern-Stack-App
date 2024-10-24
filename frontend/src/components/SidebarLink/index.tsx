import { Link } from "react-router-dom"

type Props = {
    title: string;
    to: string
}

const SidebarLink = (props: Props) => {
  return (
    <div className="flex h-10 px-3 font-semibold text-lg justify-start items-center dark:bg-slate-700 dark:text-gray-300 rounded-full">
      <Link to={props.to}>{props.title}</Link>
    </div>
  )
}

export default SidebarLink