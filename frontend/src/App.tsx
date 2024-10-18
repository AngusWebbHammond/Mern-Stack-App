import { useEffect, useState } from "react"

function App() {
  
  const [apiResponse, setApiResponse] = useState<{_id: string, title: string, type: string, description: string, priority: string, deadline: Date}[] | null>(null);

  useEffect(() => {
    fetch('http://localhost:5050/?type=Todo', {
      method: 'GET',
    }).then((res) => {
      console.log(res)
      return res.json()
    })
    .then((data) => {
      console.log(data);
      setApiResponse(data);
    }
    )
  }
    , [])

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
        </div>
      )}
    </div>
  )
}

export default App
