import { Link } from "react-router-dom"

type Props = {
    title: string;
    to: string
}

const SidebarLink = (props: Props) => {
  return (
    <div className="flex h-12 justify-start items-center">
      <Link to={props.to}>{props.title}</Link>
    </div>
  )
}

export default SidebarLink