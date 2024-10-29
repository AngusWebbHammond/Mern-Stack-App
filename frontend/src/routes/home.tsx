import { useState } from "react"
import ArrowButton from "../components/ArrowButton"
import HomeView from "../components/HomeViewComponent"

const Home = () => {
  const [index, setIndex] = useState<number>(0);

  const views = [{
    image: "", 
    altText: "Board View",
    title: "Board View",
    description: "This view is the main one you will tend to always use throughout this todo application, as you can edit and create new todos from here.",
    imageLeft: true
  },
  {
    image: "", 
    altText: "List of Todos",
    title: "List of Todos",
    description: "List of Todos Description",
    imageLeft: false
  },
  {
    image: "", 
    altText: "Calendar",
    title: "Calendar",
    description: "Calendar View Description",
    imageLeft: true
  }
]

  return (
    <div className="flex flex-col dark:text-white justify-start items-center h-full p-20 gap-5">
      <h1 className="font-bold text-5xl">
        Welcome to Todos
      </h1>
      <div className="flex flex-col w-full h-full gap-4">
        <div className="flex flex-row justify-between border-b-2 border-slate-600">
          <h2 className="font-semibold text-3xl">
            Different Views
          </h2>
          <div>
            <ArrowButton type="Left" index={index} setIndex={setIndex}/>
            <ArrowButton type="Right" index={index} setIndex={setIndex}/>
          </div>
        </div>
        <HomeView image={views[index].image} altText={views[index].altText} title={views[index].title} description={views[index].description} imageLeft={views[index].imageLeft}/>
      </div>
    </div>
  )
}

export default Home