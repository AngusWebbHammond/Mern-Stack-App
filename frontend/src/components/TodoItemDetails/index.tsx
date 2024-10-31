import { TodoType } from "../../types/todo-board-types";

type Props = {
  h3TextStyling: string;
  h4TextStyling: string;
  todoItemDict: TodoType;
};

const TodoItemDetails = (props: Props) => {
  const deadline = new Date(props.todoItemDict.deadline);

  return (
    <div className="flex flex-col gap-1">
      <h3 className={props.h3TextStyling}>{props.todoItemDict.title}</h3>
      <p className={props.h4TextStyling}>{props.todoItemDict.description}</p>
      <h3 className={props.h4TextStyling}>{deadline.toLocaleDateString()}</h3>
    </div>
  );
};

export default TodoItemDetails;
