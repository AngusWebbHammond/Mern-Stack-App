import AddNewTodo from "../Add-New-Todo"
import TodoItem from "../Todo-Item"
import TodoListTitle from "../Todo-List-Title"
import { TodoType, TodoTypeType } from "../../types/todo-board-types";

type Props = {
    todoListDict: TodoTypeType,
    data: TodoType[] | null,
    h1TextStyling: string,
    h3TextStyling: string,
    h4TextStyling: string,
    todoLists: TodoTypeType[],
    setData: (data: TodoType[] | null) => void,
    addNewTodo: (id: string, title: string) => void,
    deleteTodoItem: (id: string) => void,
    deleteTodoItemList: (title: string) => void,
    setTodoLists: (todoLists: TodoTypeType[]) => void,
    isTitleUpdating: boolean,
    setIsTitleUpdating: (isTitleUpdating: boolean) => void,
    index: number,
}

const TodoList = (props: Props) => {


    return (
            <div 
            className={`flex flex-col bg-gray-100 dark:bg-slate-700 rounded-lg min-w-96 max-w-96 h-full ring-offset-slate-900/5 shadow-xl p-3 ring-slate-800 ring-1`}>
                {/* Todo List Header */}
                    <TodoListTitle 
                        setData={props.setData} 
                        setIsTitleUpdating={props.setIsTitleUpdating} 
                        isTitleUpdating={props.isTitleUpdating} 
                        todoLists={props.todoLists} 
                        setTodoLists={props.setTodoLists} 
                        index={props.index} 
                        todoListDict={props.todoListDict} 
                        h1TextStyling={props.h1TextStyling} 
                        data={props.data} 
                        deleteTodoItemList={props.deleteTodoItemList}/>
                    {/* Todo List Contents */}
                    <div className="overflow-y-auto">
                        <div className='flex flex-col bg-gray-200 dark:bg-slate-700 p-3 gap-3'>
                            {props.data?.filter((item) => item.type === props.todoListDict._id).map((todoItemDict: TodoType) => (
                                <TodoItem 
                                    isTitleUpdating={props.isTitleUpdating} 
                                    setIsTitleUpdating={props.setIsTitleUpdating} 
                                    index={props.data?.findIndex((item) => item._id === todoItemDict._id)} 
                                    todoItemDict={todoItemDict} 
                                    h3TextStyling={props.h3TextStyling} 
                                    h4TextStyling={props.h4TextStyling} 
                                    deleteTodoItem={props.deleteTodoItem} 
                                    key={todoItemDict._id} 
                                    data={props.data} 
                                    setData={props.setData}/>
                            ))}
                            
                        </div>
                    </div>
                    <div className="p-3 relative">
                        <AddNewTodo id={props.todoListDict._id} todoTitle={props.todoListDict.title} h3TextStyling={props.h3TextStyling} addNewTodo={props.addNewTodo}/>
                    </div>
            </div>        
    )
}

export default TodoList