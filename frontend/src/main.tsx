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
import TodoComponent from "./routes/todo-board";
import TodoHome from "./routes/todo-home";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>} />
          <Route path="todo-boards/" >
            <Route index element={<TodoHome/>}/>
            <Route path="list" element={<TodoComponent type="List"/>}/>
            <Route path="board" element={<TodoComponent type="Board"/>}/>
          </Route>
          <Route path="*" element={<ErrorPage/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
