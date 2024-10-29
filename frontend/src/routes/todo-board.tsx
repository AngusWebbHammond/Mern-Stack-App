import { useEffect, useState } from 'react'
import TodoBoard from '../components/Todo-Board';
import type { TodoType, TodoTypeType } from '../types/todo-board-types';
import TodoBoardList from '../components/Todo-Board-List';
import CalendarComponent from '../components/Calendar';

type Props = {
  type: string,
}

function TodoComponent(props: Props) {
  const [data, setData] = useState<TodoType[] | null>(null);
  const [todoLists, setTodoLists] = useState<TodoTypeType[]>([]);
  const [isTitleUpdating, setIsTitleUpdating] = useState<boolean>(false);
  const [isDataUpdating, setIsDataUpdating] = useState<boolean>(false);
  
  const BaseURL = new URL(import.meta.env.VITE_BACKEND_API_BASE_URL)
  
  useEffect(() => {
    getAllTodo()
    getAllTodoType()
  }, [isDataUpdating, isTitleUpdating])

  const h1TextStyling: string = 'text-black dark:text-white font-medium text-2xl flex justify-left';
  const h3TextStyling: string = 'text-gray-800 dark:text-gray-100 font-bold text-md flex justify-left items-center';
  const h4TextStyling: string = 'text-gray-700 dark:text-gray-300 font-normal text-sm flex justify-left';

  function deleteTodoItem (id: string): void {
    const deleteTodoURL = new URL("todo/delete", BaseURL)
    deleteTodoURL.searchParams.append("_id", id)

    fetch(deleteTodoURL, {method: 'DELETE'})
    .then((res) => {
      return res.json()
    })
    .then((resData) => {
      setIsDataUpdating(!isDataUpdating);
      console.log(resData);
    })
  }

  function getAllTodo (): void {
    const getAllTodoURL = new URL("todo/get/all", BaseURL)

    fetch(getAllTodoURL, {method: 'GET'})
    .then((res) => {
      return res.json()
    })
    .then((resData) => {
      setData(resData);
    })
  }

  function getAllTodoType (): void {
    const getTodoTypesURL = new URL("todo/get/types", BaseURL)

    fetch(getTodoTypesURL, {method: 'GET'})
    .then((res) => {
      return res.json()
    })
    .then((resData) => {
      setTodoLists(resData)
    })
  }

  function addNewTodo (typeID: string, type: string): void {
    const addNewTodoURL = new URL("todo/create", BaseURL)

    const deadline = new Date()

    console.log(deadline.toDateString())

    const searchParameters = {
      title: "New Todo",
      type: type,
      description: "New Todo Description",
      priority: "Low",
      deadline: deadline.toDateString(),
      typeID: typeID
    }

    for (const [key, value] of Object.entries(searchParameters)) {
      addNewTodoURL.searchParams.append(key, value)
    }
    
    fetch(addNewTodoURL, {method: 'POST'})
    .then(() => {
      setIsDataUpdating(!isDataUpdating);
      return;
    })
  }

  function addNewTodoList (): void {
    const addNewTodoListURL = new URL("todo/list/create", BaseURL)

    addNewTodoListURL.searchParams.append("type", "New Todo List")

    fetch(addNewTodoListURL, {method: 'POST'})
    .then(() => {
      setIsDataUpdating(!isDataUpdating);
    })
  }

  function deleteTodoItemList (id: string): void {
    const deleteTodoItemListURL = new URL("todo/list/delete", BaseURL)

    deleteTodoItemListURL.searchParams.append("id", id)

    fetch(deleteTodoItemListURL, {method: 'DELETE'})
    .then((res) => {
      return res.json()
    })
    .then((resData) => {
      setIsDataUpdating(!isDataUpdating);
      console.log(resData);
    })
  }

  
  return (
    <div className={`flex flex-row gap-2 justify-center h-full px-20 bg-white dark:bg-slate-900 
    ${props.type === "Board" ? `items-center`: `items-start`}`}>
      {props.type === "Board"?
      <TodoBoard 
        setTodoLists={setTodoLists} 
        h1TextStyling={h1TextStyling} 
        h3TextStyling={h3TextStyling} 
        h4TextStyling={h4TextStyling} 
        todoLists={todoLists} 
        data={data} 
        setData={setData} 
        addNewTodo={addNewTodo} 
        deleteTodoItem={deleteTodoItem} 
        addNewTodoList={addNewTodoList} 
        deleteTodoItemList={deleteTodoItemList} 
        isTitleUpdating={isTitleUpdating} 
        setIsTitleUpdating={setIsTitleUpdating}
      />:
      props.type === "List"?
      <TodoBoardList 
        data={data}
        todoLists={todoLists}
      />:
      <CalendarComponent
        data={data}
      />
      }
    </div>
    
  )
}

export default TodoComponent
