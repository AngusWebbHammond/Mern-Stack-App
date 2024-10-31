type Props = {
  value: string;
  onClick: () => void;
};

const TodoItemEditingButton = (props: Props) => {
  return (
    <button
      className="bg-slate-500 px-2 m-0 text-gray-700 dark:text-gray-200 font-semibold rounded-full hover:dark:bg-slate-400"
      onClick={props.onClick}
    >
      {props.value}
    </button>
  );
};

export default TodoItemEditingButton;
