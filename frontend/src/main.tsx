import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Route,
  Routes

} from "react-router-dom";
import './index.css'
import Home from "./routes/home";
import ErrorPage from "./routes/error-page";
import Layout from "./routes/layout";
import TodoBoard from "./routes/todo-board";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>} />
          <Route path="todo-board" element={<TodoBoard/>}/>
          <Route path="*" element={<ErrorPage/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
