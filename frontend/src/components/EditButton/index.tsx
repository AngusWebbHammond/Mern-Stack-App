import { Pencil } from "lucide-react";

type Props = {
  onClick: (bool: boolean) => void;
};

const EditButton = (props: Props) => {
  return (
    <button
      className="hover:bg-gray-500 dark:hover:bg-slate-500 rounded-full flex justify-center items-center"
      onClick={() => props.onClick(true)}
    >
      <Pencil className="stroke-gray-300 h-6 w-6 hover:stroke-blue-300" />
    </button>
  );
};

export default EditButton;
