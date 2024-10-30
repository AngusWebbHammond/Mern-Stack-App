type Props = {
    tempDescription: string,
    setTempDescription: (tempDescription: string) => void
}

const TodoItemEditingDescription = (props: Props) => {
  return (
    <textarea 
        className={'text-gray-700 dark:text-gray-300 font-normal text-sm bg-gray-500 w-60 min-h-24 px-2'} 
        autoFocus
        value={props.tempDescription}
        onChange={(e) => props.setTempDescription(e.currentTarget.value)}
    />
  )
}

export default TodoItemEditingDescription