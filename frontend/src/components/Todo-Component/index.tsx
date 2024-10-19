import { useEffect, useState } from 'react'
import TodoBoard from '../Todo-Board';
import type { TodoType } from './types';

function TodoComponent() {
  const [data, setData] = useState<TodoType[] | null>(null);
  const [todoLists, setTodoLists] = useState<string[]>([]);
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
  }, [])

  const [isTitleUpdating, setIsTitleUpdating] = useState<boolean>(false);
  
  const h1TextStyling: string = 'text-black dark:text-white font-medium text-2xl flex justify-left';
  const h3TextStyling: string = 'text-gray-800 dark:text-gray-100 font-bold text-md flex justify-left items-center';
  const h4TextStyling: string = 'text-gray-700 dark:text-gray-300 font-normal text-sm flex justify-left';

  function deleteTodoItem (id: string): void {
  }

  function addNewTodo (type: string): void {
  }

  function addNewTodoList (): void {
  }

  function deleteTodoItemList (id: string): void {
  }

  
  return (
    <div className='flex flex-row gap-2 justify-center items-center h-screen bg-white dark:bg-slate-900'>
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
        setIsTitleUpdating={setIsTitleUpdating}/>
    </div>
    
  )
}

export default TodoComponent
