import { useState } from "react";
import { TodoType } from '../../types/todo-board-types';
import TodoItemEditing from "../TodoItemEditing";
import TodoItemDetails from "../TodoItemDetails";
import TodoItemWidget from "../TodoItemWidget";


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
  
  return (
    <div 
      className={`bg-gray-300 dark:bg-slate-600 rounded-md gap-2 flex justify-between pl-3 pr-4 ring-2 ring-slate-700 py-3`}>
        <div className='w-60'>
            {isEditing?
            <TodoItemEditing h3TextStyling={props.h3TextStyling} todoItemDict={props.todoItemDict} setIsEditing={setIsEditing} isTitleUpdating={props.isTitleUpdating} setIsTitleUpdating={props.setIsTitleUpdating}/>:
            <TodoItemDetails h3TextStyling={props.h3TextStyling} h4TextStyling={props.h4TextStyling} todoItemDict={props.todoItemDict}/>}
        </div>
        <TodoItemWidget isEditing={isEditing} todoItemDict={props.todoItemDict} setIsEditing={setIsEditing} deleteTodoItem={props.deleteTodoItem}/>
    </div>
  )
}

export default TodoItem