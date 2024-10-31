import { TodoType } from "../../types/todo-board-types";
import DeleteButton from "../DeleteButton";
import EditButton from "../EditButton";

type Props = {
  isEditing: boolean;
  todoItemDict: TodoType;
  setIsEditing: (isEditing: boolean) => void;
  deleteTodoItem: (id: string) => void;
};

const TodoItemWidget = (props: Props) => {
  return (
    <div className="flex flex-col items-end gap-2">
      {props.isEditing ? (
        <></>
      ) : (
        <h6
          className={`${
            props.todoItemDict.priority === "Low"
              ? `bg-green-600`
              : props.todoItemDict.priority === "Medium"
              ? `bg-yellow-600`
              : `bg-red-600`
          } text-white rounded-full px-1 text-sm`}
        >
          {props.todoItemDict.priority}
        </h6>
      )}

      <div className="flex flex-row">
        <EditButton onClick={props.setIsEditing} />
        <DeleteButton
          item={props.todoItemDict._id}
          onClick={props.deleteTodoItem}
        />
      </div>
    </div>
  );
};

export default TodoItemWidget;
