import { useEffect, useState } from "react";

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
      {apiResponse?.map((todo) => 
        <div key={todo._id}>
          <h1 className="text-xl font-bold">
            {todo.title}
          </h1>
          <p>
            {todo.description}
          </p>
          <h6>
            {todo.deadline.slice(0,10)}
          </h6>
        </div>
      )}
    </div>
  )
}

export default TodoBoard