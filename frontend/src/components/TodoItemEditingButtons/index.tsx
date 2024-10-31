import { TodoType } from "../../types/todo-board-types";
import TodoItemEditingButton from "../TodoItemEditingButton";

type Props = {
  todoItemDict: TodoType;
  tempTitle: string;
  tempDescription: string;
  tempDeadline: Date | null;
  tempPriority: string;
  isTitleUpdating: boolean;
  setIsEditing: (isEditing: boolean) => void;
  setTempDeadline: (tempDeadline: Date | null) => void;
  setTempDescription: (tempDescription: string) => void;
  setTempPriority: (tempPriority: string) => void;
  setTempTitle: (tempTitle: string) => void;
  setIsTitleUpdating: (isTitleUpdating: boolean) => void;
  deadline: Date;
};

const TodoItemEditingButtons = (props: Props) => {
  const updateTitle = (todoData: TodoType) => {
    const BaseURL = new URL(import.meta.env.VITE_BACKEND_API_BASE_URL);

    const searchParameters = {
      id: todoData._id,
      title: todoData.title,
      type: todoData.type,
      description: todoData.description,
      deadline: todoData.deadline,
      priority: todoData.priority,
    };

    const updateURL = new URL("todo/update", BaseURL);

    for (const [key, value] of Object.entries(searchParameters)) {
      updateURL.searchParams.append(key, value);
    }

    fetch(updateURL, { method: "PUT" })
      .then((res) => {
        return res.json();
      })
      .then((resData) => {
        console.log(resData);
        props.setIsEditing(false);
        props.setIsTitleUpdating(!props.isTitleUpdating);
      });
  };

  return (
    <div className="flex flex-row gap-2">
      <TodoItemEditingButton
        value="Cancel"
        onClick={() => {
          props.setIsEditing(false);
          props.setTempDeadline(props.deadline);
          props.setTempDescription(props.todoItemDict.description);
          props.setTempPriority(props.todoItemDict.priority);
          props.setTempTitle(props.todoItemDict.title);
        }}
      />
      <TodoItemEditingButton
        value="Submit"
        onClick={() => {
          const tempItemData = props.todoItemDict;
          tempItemData.title = props.tempTitle;
          tempItemData.description = props.tempDescription;
          tempItemData.deadline = props.tempDeadline?.toDateString() as string;
          tempItemData.priority = props.tempPriority;
          updateTitle(tempItemData);
        }}
      />
    </div>
  );
};

export default TodoItemEditingButtons;
