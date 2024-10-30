type Props = {
    h3TextStyling: string,
    tempTitle: string,
    setTempTitle: (tempTitle: string) => void
}

const TodoItemEditingTitle = (props: Props) => {
    return (
        <input 
            className={props.h3TextStyling + ' bg-gray-500 w-60 px-2'} 
            type='text' 
            autoFocus 
            value={props.tempTitle} 
            onChange={(e) => props.setTempTitle(e.currentTarget.value)}
        />  
    )
}

export default TodoItemEditingTitle