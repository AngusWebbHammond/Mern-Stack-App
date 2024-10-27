import { useState } from "react";
import { TodoType } from '../../../../types/todo-board-types';
import DeleteButton from '../Delete-Button';
import EditButton from '../Edit-Button';
import DatePicker, { registerLocale, setDefaultLocale } from "react-datepicker";

import { enGB } from 'date-fns/locale/en-GB';

import "react-datepicker/dist/react-datepicker.css"

registerLocale("en-GB", enGB)
setDefaultLocale("en-GB")


type Props = {
  todoItemDict: TodoType,
  h3TextStyling: string,
  h4TextStyling: string,
  deleteTodoItem: (id: string) => void,
  index: number | undefined,
  setData: (data: TodoType[] | null) => void,
  data: TodoType[] | null,
  isTitleUpdating: boolean,
  setIsTitleUpdating: (isTitleUpdating: boolean) => void,
}

const TodoItem = (props: Props) => {  
  const deadline = new Date(props.todoItemDict.deadline);

  const BaseURL = new URL(import.meta.env.VITE_BACKEND_API_BASE_URL)
  
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [tempTitle, setTempTitle] = useState<string>(props.todoItemDict.title);
  const [tempDescription, setTempDescription] = useState<string>(props.todoItemDict.description);
  const [tempDeadline, setTempDeadline] = useState<Date | null>(deadline);
  const [tempPriority, setTempPriority] = useState<string>(props.todoItemDict.priority)

  const updateTitle = (todoData: TodoType) => {

    const searchParameters = {
      id: todoData._id,
      title: todoData.title,
      type: todoData.type,
      description: todoData.description,
      deadline: todoData.deadline,
      priority: todoData.priority
    }

    const updateURL = new URL("todo/update", BaseURL)

    for (const [key, value] of Object.entries(searchParameters)) {
      updateURL.searchParams.append(key, value)
    }
    
    console.log(updateURL.href)
    fetch(updateURL, {method: 'PUT'})
    .then((res) => {
      return res.json()
    })
    .then((resData) => {
      console.log(resData);
      setIsEditing(false);
      props.setIsTitleUpdating(!props.isTitleUpdating);
    })
  }

  return (
    <>
      <div 
        className={`bg-gray-300 dark:bg-slate-600 rounded-md gap-2 flex justify-between pl-3 pr-4 ring-2 ring-slate-700 py-3`}>
          <div className='flex flex-col w-60 justify-center gap-2'>
              {isEditing?<input 
                className={props.h3TextStyling+' bg-gray-500 w-60 px-2'} 
                type='text' 
                autoFocus 
                value={tempTitle} 
                onChange={(e) => setTempTitle(e.currentTarget.value)}
                />
              :<h3 className={props.h3TextStyling}>{props.todoItemDict.title}</h3>}

              {isEditing?<textarea 
                className={'text-gray-700 dark:text-gray-300 font-normal text-sm bg-gray-500 w-60 min-h-24 px-2'} 
                autoFocus
                value={tempDescription}
                onChange={(e) => {
                  setTempDescription(e.currentTarget.value)
                }}
                />
              :<p className={props.h4TextStyling}>{props.todoItemDict.description}</p>}

              {isEditing?
              <div className="flex flex-row text-gray-700 dark:text-gray-300 gap-1">
                <h5>Deadline:</h5>
                <DatePicker 
                selected={tempDeadline} 
                onChange={(date) => setTempDeadline(date)}
                withPortal
                customInput={<button className="text-gray-700 dark:text-gray-300 font-normal text-sm px-2 bg-gray-500">{tempDeadline?.toLocaleDateString()}</button>}/>
              </div>
              :<h3 className={props.h4TextStyling}>{deadline.toLocaleDateString()}</h3>}

              {isEditing?
              <div className="flex flex-row text-gray-700 dark:text-gray-300 gap-1">
                <h5>Priority:</h5>
                <select className={`flex dark:bg-gray-500 rounded-md items-center justify-center
                ${tempPriority === "Low"?
                `dark:bg-green-600`:
                tempPriority === "Medium"?
                `dark:bg-yellow-600`:
                `dark:bg-red-600`}`} value={tempPriority} onChange={(e) => setTempPriority(e.currentTarget.value)}>
                  <option value="Low" className="bg-green-600">Low</option>
                  <option value="Medium" className="bg-yellow-600">Medium</option>
                  <option value="High" className="bg-red-600">High</option>
                </select>
              </div>
              :<></>}
              
              {isEditing?
              <div className="flex flex-row gap-2">
                <button className="bg-slate-500 px-2 m-0 text-gray-700 dark:text-gray-200 font-semibold rounded-full hover:dark:bg-slate-400"
                onClick={() => {
                  setIsEditing(false);
                  setTempDeadline(deadline)
                  setTempDescription(props.todoItemDict.description)
                  setTempPriority(props.todoItemDict.priority)
                  setTempTitle(props.todoItemDict.title)
                }}>Cancel</button>

                <button className="bg-slate-500 px-2 m-0 text-gray-700 dark:text-gray-200 font-semibold rounded-full hover:dark:bg-slate-400"
                onClick={() => {
                  const tempItemData = props.todoItemDict;
                  tempItemData.title = tempTitle;
                  tempItemData.description = tempDescription;
                  tempItemData.deadline = tempDeadline?.toDateString() as string;
                  tempItemData.priority = tempPriority;
                  updateTitle(tempItemData);
                }}>Submit</button>
              </div>
              :<></>}
          </div>
          
          <div className='flex flex-col gap-2'>
            <div className='flex flex-col items-end gap-2'>
              {isEditing?<></>:<h6 className={`${props.todoItemDict.priority === "Low"?
                `bg-green-600`:
                props.todoItemDict.priority === "Medium"?
                `bg-yellow-600`:
                `bg-red-600`} text-white rounded-full px-1 text-sm`}>{props.todoItemDict.priority}</h6>}
              
              <div className='flex flex-row'>
                <EditButton onClick={setIsEditing}/>
                <DeleteButton item={props.todoItemDict._id} onClick={props.deleteTodoItem}/>
              </div>
            </div>
          </div>
      </div>
    </>
  )
}

export default TodoItem