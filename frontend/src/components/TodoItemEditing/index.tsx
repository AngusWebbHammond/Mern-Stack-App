import { useState } from "react";
import { TodoType } from "../../types/todo-board-types";
import TodoItemEditingPrioritySelect from "../TodoItemEditingPrioritySelect";
import TodoItemEditingDeadline from "../TodoItemEditingDeadline";
import TodoItemEditingDescription from "../TodoItemEditingDescription";
import TodoItemEditingTitle from "../TodoItemEditingTitle";
import TodoItemEditingButtons from "../TodoItemEditingButtons";

type Props = {
    h3TextStyling: string,
    todoItemDict: TodoType,
    isTitleUpdating: boolean,
    setIsEditing: (isEditing: boolean) => void,
    setIsTitleUpdating: (isTitleUpdating: boolean) => void
}

const TodoItemEditing = (props: Props) => {
    const deadline = new Date(props.todoItemDict.deadline);

    // Hooks
    const [tempTitle, setTempTitle] = useState<string>(props.todoItemDict.title);
    const [tempDescription, setTempDescription] = useState<string>(props.todoItemDict.description);
    const [tempDeadline, setTempDeadline] = useState<Date | null>(deadline);
    const [tempPriority, setTempPriority] = useState<string>(props.todoItemDict.priority)

    return (
        <div className="flex flex-col gap-2">
            <TodoItemEditingTitle h3TextStyling={props.h3TextStyling} tempTitle={tempTitle} setTempTitle={setTempTitle}/>
            <TodoItemEditingDescription tempDescription={tempDescription} setTempDescription={setTempDescription}/>
            <TodoItemEditingDeadline tempDeadline={tempDeadline} setTempDeadline={setTempDeadline}/>
            <TodoItemEditingPrioritySelect tempPriority={tempPriority} setTempPriority={setTempPriority}/>
            <TodoItemEditingButtons 
            tempDeadline={tempDeadline} 
            tempDescription={tempDescription}
            tempPriority={tempPriority}
            tempTitle={tempTitle}
            setIsEditing={props.setIsEditing}
            setTempDeadline={setTempDeadline}
            setTempDescription={setTempDescription}
            setTempPriority={setTempPriority}
            setTempTitle={setTempTitle}
            todoItemDict={props.todoItemDict}
            deadline={deadline}
            isTitleUpdating={props.isTitleUpdating}
            setIsTitleUpdating={props.setIsTitleUpdating}/>
        </div>
    )
}

export default TodoItemEditing