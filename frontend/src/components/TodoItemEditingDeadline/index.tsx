import DatePicker, { registerLocale, setDefaultLocale } from "react-datepicker"
import { enGB } from 'date-fns/locale/en-GB';
import "react-datepicker/dist/react-datepicker.css"

registerLocale("en-GB", enGB)
setDefaultLocale("en-GB")

type Props = {
    tempDeadline: Date | null,
    setTempDeadline: (tempDeadline: Date | null) => void
}

const TodoItemEditingDeadline = (props: Props) => {
  return (
    <div className="flex flex-row text-gray-700 dark:text-gray-300 gap-1">
        <h5>Deadline:</h5>
        <DatePicker 
        selected={props.tempDeadline} 
        onChange={(date) => props.setTempDeadline(date)}
        withPortal
        customInput={<button className="text-gray-700 dark:text-gray-300 font-normal text-sm px-2 bg-gray-500">{props.tempDeadline?.toLocaleDateString()}</button>}/>
    </div>
  )
}

export default TodoItemEditingDeadline