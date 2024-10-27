type Props = {
    title: string,
    inputName: string,
    default?: boolean
}

const SortingRadio = (props: Props) => {
  return (
    <div className="flex flex-row gap-2">
        <input id={props.title} type="radio" name={props.inputName} value={props.title} defaultChecked={props.default}/>
        <label htmlFor={props.title}>{props.title}</label>
    </div>
  )
}

export default SortingRadio