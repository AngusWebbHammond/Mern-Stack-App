import {Calendar, momentLocalizer} from "react-big-calendar"
import moment from 'moment'
import "react-big-calendar/lib/css/react-big-calendar.css"
import { TodoType } from "../../types/todo-board-types"

const localizer = momentLocalizer(moment)

type Props = {
  data: TodoType[] | null
}

const CalendarComponent = (props: Props) => {
  const eventDict: any[] = [];
  
  props.data?.map((item) => {
    eventDict.push({
      title: item.title,
      start: item.deadline,
      end: item.deadline,
      allDay: true,
      color: item.priority === "High"? "#dc2626": item.priority === "Medium"? "#ca8a04": "#16a34a"
    })
  })

  return (
    <div className="flex dark:text-white h-full justify-center w-full py-20">
        <Calendar
        localizer={localizer}
        events={eventDict}
        startAccessor="start"
        endAccessor="end"
        style={{ 
          height: "inherit",
          width: "inherit",
         }}
        eventPropGetter={(eventList) => {
          const backgroundColor = eventList.color
          const color = "white"
          return { style: {backgroundColor, color} }
        }}
      />
    </div>
  )
}

export default CalendarComponent