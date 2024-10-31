import { useDispatch } from "react-redux";
import { change } from "../../features/sortingType/sortingTypeSlice";

type Props = {
  title: string;
  inputName: string;
  default?: boolean;
};

const SortingRadio = (props: Props) => {
  // Hooks
  const dispatch = useDispatch();

  return (
    <div className="flex flex-row gap-2">
      <input
        id={props.title}
        type="radio"
        name={props.inputName}
        value={props.title}
        defaultChecked={props.default}
        onClick={() => dispatch(change(props.title.toLowerCase()))}
      />
      <label htmlFor={props.title}>{props.title}</label>
    </div>
  );
};

export default SortingRadio;
