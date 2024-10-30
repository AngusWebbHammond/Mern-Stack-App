type Props = {
    tempPriority: string,
    setTempPriority: (tempPriority: string) => void
}

const TodoItemEditingPrioritySelect = (props: Props) => {
  return (
    <div className="flex flex-row text-gray-700 dark:text-gray-300 gap-1">
        <h5>Priority:</h5>
        <select 
            className={`flex dark:bg-gray-500 rounded-md items-center justify-center
                ${props.tempPriority === "Low"?
                `dark:bg-green-600`:
                props.tempPriority === "Medium"?
                `dark:bg-yellow-600`:
                `dark:bg-red-600`}`} 
            value={props.tempPriority} 
            onChange={(e) => props.setTempPriority(e.currentTarget.value)}
        >
            <option value="Low" className="bg-green-600">Low</option>
            <option value="Medium" className="bg-yellow-600">Medium</option>
            <option value="High" className="bg-red-600">High</option>
        </select>
    </div>
  )
}

export default TodoItemEditingPrioritySelect