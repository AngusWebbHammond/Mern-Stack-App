import { useState } from "react";
import { TodoType } from '../../types/todo-board-types';
import DeleteButton from '../DeleteButton';
import EditButton from '../EditButton';
import TodoItemEditing from "../TodoItemEditing";


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
  // Hooks
  const [isEditing, setIsEditing] = useState<boolean>(false);
  
  // Variables
  const BaseURL = new URL(import.meta.env.VITE_BACKEND_API_BASE_URL)  
  const deadline = new Date(props.todoItemDict.deadline);

  // Functions
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
    <div 
      className={`bg-gray-300 dark:bg-slate-600 rounded-md gap-2 flex justify-between pl-3 pr-4 ring-2 ring-slate-700 py-3`}>
        <div className='flex flex-col w-60 justify-center gap-2'>

            {isEditing?
            <TodoItemEditing h3TextStyling={props.h3TextStyling} todoItemDict={props.todoItemDict} setIsEditing={setIsEditing} updateTitle={updateTitle}/>
            :
            <>
              <h3 className={props.h3TextStyling}>{props.todoItemDict.title}</h3>
              <p className={props.h4TextStyling}>{props.todoItemDict.description}</p>
              <h3 className={props.h4TextStyling}>{deadline.toLocaleDateString()}</h3>
            </>
            }
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
  )
}

export default TodoItem