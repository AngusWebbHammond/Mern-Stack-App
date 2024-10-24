import { useEffect, useState } from "react";
import { TodoType, TodoTypeType } from "../../../types/todo-board-types"

type Props = {
  data: TodoType[] | null,
  todoLists: TodoTypeType[]
}

const TodoBoardList = (props: Props) => {
  const [widths, setWidths] = useState<string[]>(['100px', '300px', '120px', '130px', '150px']);
  const [dataWithTypes, setDataWithTypes] = useState<TodoType[] | null>(null);

  useEffect(() => {
    const dataNew: TodoType[] | null = [];
    props.data?.sort((a, b) => {
      if (a.type < b.type) {
        return -1;
      }
      if (a.type > b.type) {
        return 1;
      }
      return 0;
    }).map((item: TodoType) => {
      dataNew.push(
        {
          _id: item._id,
          title: item.title,
          description: item.description,
          type: props.todoLists.filter((filterItem) => filterItem._id === item.type)[0]?.title,
          priority: item.priority,
          deadline: item.deadline,
        }
      )
    })

    setDataWithTypes(dataNew);
    return;
  }, [props.data])

  

  return (
    <div className="p-40 h-full">
      <div className="flex flex-col overflow-auto h-full" >
        <table className="dark:text-gray-400">
          <thead>
            <tr className="flex flex-row dark:text-gray-300 border-b-2 border-t-2">
              <th className={`font-bold text-3xl w-[100px] text-left border-r-2 border-l-2 border-solid px-2`}>Title</th>
              <th className={`font-bold text-3xl w-[300px] xl:w-[800px] 2xl:w-[1200px] text-left border-r-2 border-solid px-2`}>Description</th>
              <th className={`flex font-bold text-3xl w-[120px] justify-center text-left border-r-2 border-solid px-2`}>Type</th>
              <th className={`flex font-bold text-3xl w-[130px] justify-center text-left border-r-2 border-solid px-2`}>Priority</th>
              <th className={`flex font-bold text-3xl w-[150px] justify-center text-left border-r-2 border-solid px-2`}>Deadline</th>
            </tr>
          </thead>
          <tbody className="border-b-2">
              {dataWithTypes?.map((item) => 
                <tr key={item._id} className="flex">
                  <td className={`flex w-[${widths[0]}] text-left border-r-2 border-b-2 border-b-slate-300 border-opacity-30 border-l-2 border-solid p-2 items-center font-bold`}>{item.title}</td>
                  <td className={`flex w-[${widths[1]}] xl:w-[800px] 2xl:w-[1200px] text-left border-r-2 border-b-2 border-b-slate-300 border-opacity-30 border-solid p-2 items-center`}>{item.description}</td>
                  <td className={`flex w-[${widths[2]}] justify-center text-left border-r-2 border-b-2 border-b-slate-300 border-opacity-30 border-solid p-2 items-center`}>{item.type}</td>
                  <td className={`flex w-[${widths[3]}] justify-center text-left border-r-2 border-b-2 border-b-slate-300 border-opacity-30 border-solid p-2 items-center ${
                    item.priority === "Low"? `text-green-500`: 
                    item.priority === "Medium"? `text-yellow-500`:
                    `text-red-500`
                    }`}>{item.priority}</td>
                  <td className={`flex w-[${widths[4]}] justify-center text-left border-r-2 border-b-2 border-b-slate-300 border-opacity-30 border-solid p-2 items-center`}>{item.deadline.slice(0,10)}</td>
                </tr>
              )}  
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default TodoBoardList