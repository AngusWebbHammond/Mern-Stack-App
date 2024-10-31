import { useState } from "react";
import ArrowButton from "../components/ArrowButton";
import HomeView from "../components/HomeViewComponent";
import views from "../assets/home-data.json";

const Home = () => {
  // Hooks
  const [index, setIndex] = useState<number>(0);

  return (
    <div className="flex flex-col dark:text-white justify-start items-center h-full p-20 gap-5">
      <h1 className="font-bold text-5xl">Welcome to Todos</h1>
      <div className="flex flex-col w-full h-full gap-4">
        <div className="flex flex-row justify-between border-b-2 border-slate-600">
          <h2 className="font-semibold text-3xl">Different Views</h2>
          <div>
            <ArrowButton type="Left" index={index} setIndex={setIndex} />
            <ArrowButton type="Right" index={index} setIndex={setIndex} />
          </div>
        </div>
        <HomeView
          image={views[index].image}
          altText={views[index].altText}
          title={views[index].title}
          description={views[index].description}
          imageLeft={views[index].imageLeft}
        />
      </div>
    </div>
  );
};

export default Home;
