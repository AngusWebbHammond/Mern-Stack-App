import { useEffect, useState } from "react";
import TodoComponent from "../components/Todo-Component";

const TodoBoard = () => {

    const [apiResponse, setApiResponse] = useState<{_id: string, title: string, type: string, description: string, priority: string, deadline: string}[] | null>(null);

  useEffect(() => {
    fetch('http://localhost:5050/?type=Todo', {
      method: 'GET',
    })
    .then((res) => {
      return res.json()
    })
    .then((data) => {
      setApiResponse(data);
    })
  }, [])
  return (
    <div>
      <TodoComponent/>
    </div>
  )
}

export default TodoBoard