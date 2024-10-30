import { useState } from "react";
import { TodoType } from "../../types/todo-board-types";
import DatePicker, { registerLocale, setDefaultLocale } from "react-datepicker";
import { enGB } from 'date-fns/locale/en-GB';
import "react-datepicker/dist/react-datepicker.css"

registerLocale("en-GB", enGB)
setDefaultLocale("en-GB")

type Props = {
    h3TextStyling: string,
    todoItemDict: TodoType,
    setIsEditing: (isEditing: boolean) => void,
    updateTitle: (itemData: TodoType) => void
}

const TodoItemEditing = (props: Props) => {
    const deadline = new Date(props.todoItemDict.deadline);

    // Hooks
    const [tempTitle, setTempTitle] = useState<string>(props.todoItemDict.title);
    const [tempDescription, setTempDescription] = useState<string>(props.todoItemDict.description);
    const [tempDeadline, setTempDeadline] = useState<Date | null>(deadline);
    const [tempPriority, setTempPriority] = useState<string>(props.todoItemDict.priority)

    return (
        <div>
            <input 
                className={props.h3TextStyling+' bg-gray-500 w-60 px-2'} 
                type='text' 
                autoFocus 
                value={tempTitle} 
                onChange={(e) => setTempTitle(e.currentTarget.value)}
            />

            <textarea 
                className={'text-gray-700 dark:text-gray-300 font-normal text-sm bg-gray-500 w-60 min-h-24 px-2'} 
                autoFocus
                value={tempDescription}
                onChange={(e) => setTempDescription(e.currentTarget.value)}
            />

            <div className="flex flex-row text-gray-700 dark:text-gray-300 gap-1">
                <h5>Deadline:</h5>
                <DatePicker 
                selected={tempDeadline} 
                onChange={(date) => setTempDeadline(date)}
                withPortal
                customInput={<button className="text-gray-700 dark:text-gray-300 font-normal text-sm px-2 bg-gray-500">{tempDeadline?.toLocaleDateString()}</button>}/>
            </div>

            <div className="flex flex-row text-gray-700 dark:text-gray-300 gap-1">
                <h5>Priority:</h5>
                <select 
                    className={`flex dark:bg-gray-500 rounded-md items-center justify-center
                        ${tempPriority === "Low"?
                        `dark:bg-green-600`:
                        tempPriority === "Medium"?
                        `dark:bg-yellow-600`:
                        `dark:bg-red-600`}`} 
                    value={tempPriority} 
                    onChange={(e) => setTempPriority(e.currentTarget.value)}
                >
                    <option value="Low" className="bg-green-600">Low</option>
                    <option value="Medium" className="bg-yellow-600">Medium</option>
                    <option value="High" className="bg-red-600">High</option>
                </select>
            </div>

            <div className="flex flex-row gap-2">
                <button 
                    className="bg-slate-500 px-2 m-0 text-gray-700 dark:text-gray-200 font-semibold rounded-full hover:dark:bg-slate-400"
                    onClick={() => {
                        props.setIsEditing(false);
                        setTempDeadline(deadline);
                        setTempDescription(props.todoItemDict.description);
                        setTempPriority(props.todoItemDict.priority);
                        setTempTitle(props.todoItemDict.title);
                }}>
                    Cancel
                </button>

                <button 
                    className="bg-slate-500 px-2 m-0 text-gray-700 dark:text-gray-200 font-semibold rounded-full hover:dark:bg-slate-400"
                    onClick={() => {
                        const tempItemData = props.todoItemDict;
                        tempItemData.title = tempTitle;
                        tempItemData.description = tempDescription;
                        tempItemData.deadline = tempDeadline?.toDateString() as string;
                        tempItemData.priority = tempPriority;
                        props.updateTitle(tempItemData);
                }}>
                    Submit
                </button>
            </div>
        </div>
    )
}

export default TodoItemEditing