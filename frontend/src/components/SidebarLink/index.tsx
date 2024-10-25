import { Link } from "react-router-dom"

type Props = {
    title: string;
    to: string
}

const SidebarLink = (props: Props) => {
  return (
    <Link 
    to={props.to} 
    className="flex h-10 px-3 font-semibold text-lg justify-start items-center dark:bg-slate-700 dark:text-gray-300 rounded-full hover:bg-slate-600">
      {props.title}
    </Link>
  )
}

export default SidebarLink