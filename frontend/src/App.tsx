import { useEffect, useState } from "react"

function App() {
  
  const [apiResponse, setApiResponse] = useState<{"Hi": number, "Hi2": string}>();

  useEffect(() => {
    fetch("http://localhost:5000/").then((res) => {
      return res.json()
    })
    .then((data) => {
      setApiResponse(data);
    }
    )
  }
    , [])

  return (
    <h1 className="text-xl font-bold">
      {apiResponse?.Hi}
      {apiResponse?.Hi2}
    </h1>
  )
}

export default App
