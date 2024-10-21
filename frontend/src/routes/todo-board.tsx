import { useEffect, useState } from 'react'
import TodoBoard from '../components/TodoBoardComponent/Todo-Board';
import type { TodoType, TodoTypeType } from '../types/todo-board-types';
import TodoBoardList from '../components/TodoBoardComponent/Todo-Board-List';

type Props = {
  type: string;
}

function TodoComponent(props: Props) {
  const [data, setData] = useState<TodoType[] | null>(null);
  const [todoLists, setTodoLists] = useState<TodoTypeType[]>([]);
  const [isTitleUpdating, setIsTitleUpdating] = useState<boolean>(false);
  const [isDataUpdating, setIsDataUpdating] = useState<boolean>(false);
  
  useEffect(() => {
    fetch('http://localhost:5050/api/todo/get/all', {method: 'GET'})
    .then((res) => {
      return res.json()
    })
    .then((resData) => {
      setData(resData);
    })

    fetch('http://localhost:5050/api/todo/get/types', {method: 'GET'})
    .then((res) => {
      return res.json()
    })
    .then((resData) => {
      setTodoLists(resData)
    })
  }, [isDataUpdating])

  const h1TextStyling: string = 'text-black dark:text-white font-medium text-2xl flex justify-left';
  const h3TextStyling: string = 'text-gray-800 dark:text-gray-100 font-bold text-md flex justify-left items-center';
  const h4TextStyling: string = 'text-gray-700 dark:text-gray-300 font-normal text-sm flex justify-left';

  function deleteTodoItem (id: string): void {
    fetch(`http://localhost:5050/api/todo/delete?_id=${id}`, {method: 'DELETE'})
    .then((res) => {
      return res.json()
    })
    .then((resData) => {
      setIsDataUpdating(!isDataUpdating);
      console.log(resData);
    })
  }

  function addNewTodo (typeID: string, type: string): void {
    fetch(`http://localhost:5050/api/todo/create?title=New Todo&type=${type}&priority=Low&description=New todo description&deadline=27 Oct 2024&typeID=${typeID}`, {method: 'POST'})
    .then(() => {
      setIsDataUpdating(!isDataUpdating);
      return;
    })
  }

  function addNewTodoList (): void {
    fetch('http://localhost:5050/api/todo/list/create?type=New Todo List', {method: 'POST'})
    .then(() => {
      setIsDataUpdating(!isDataUpdating);
    })
  }

  function deleteTodoItemList (id: string): void {
    fetch(`http://localhost:5050/api/todo/list/delete?id=${id}`, {method: 'DELETE'})
    .then((res) => {
      return res.json()
    })
    .then((resData) => {
      setIsDataUpdating(!isDataUpdating);
      console.log(resData);
    })
  }

  
  return (
    <div className={`flex flex-row gap-2 justify-center ${props.type === "Board" ? `items-center`: `items-start`}  h-screen w-screen bg-white dark:bg-slate-900`}>
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
      <TodoBoardList 
        data={data}
        todoLists={todoLists}
      />
      }
    </div>
    
  )
}

export default TodoComponent
