import { useState } from "react";
import { TodoType } from '../../../../types/todo-board-types';
import DeleteButton from '../Delete-Button';
import EditButton from '../Edit-Button';


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
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [tempTitle, setTempTitle] = useState<string>(props.todoItemDict.title);
  const [tempDescription, setTempDescription] = useState<string>(props.todoItemDict.description);

  const updateTitle = (newTitle: string, newDescription: string, index: number) => {
  }

  return (
    <>
      <div 
        className={`bg-gray-300 dark:bg-slate-600 relative rounded-md gap-2 flex justify-between pl-3 pr-4 min-h-[5rem] ring-2 ring-slate-700 py-3`}>
          <div className='flex flex-col w-60 justify-center'>
              {isEditing?<input 
                className={props.h3TextStyling+' bg-gray-500 w-60'} 
                type='text' 
                autoFocus 
                value={tempTitle} 
                onChange={(e) => setTempTitle(e.currentTarget.value)} 
                onKeyUp={(e) => {
                  if (e.code === "Enter") {
                    if (!props.index) return;
                    updateTitle(tempTitle, tempDescription, props.index);
                  }
              }}></input>:<h3 className={props.h3TextStyling}>{props.todoItemDict.title}</h3>}
              {isEditing?<textarea 
                className={'text-gray-700 dark:text-gray-300 font-normal text-sm bg-gray-500 w-60 min-h-24'} 
                autoFocus
                value={tempDescription}
                onChange={(e) => setTempDescription(e.currentTarget.value)}
                onKeyUp={(e) => {
                  if (e.code === "Enter") {
                    if (!props.index) return;
                    updateTitle(tempTitle, tempDescription, props.index);
                  }}}
              />
              :<h4 className={props.h4TextStyling}>{props.todoItemDict.description}</h4>}
          </div>
          
          <div className='flex flex-col gap-2'>
            <div className='flex flex-col items-end gap-2'>
              <h6 className={`${props.todoItemDict.priority === "Low"?
                `bg-green-600`:
                props.todoItemDict.priority === "Medium"?
                `bg-yellow-600`:
                `bg-red-600`} text-white rounded-full px-1 text-sm`}>{props.todoItemDict.priority}</h6>
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