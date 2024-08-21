import {ReactElement} from "react";
import {Route, Routes} from "react-router-dom";
import { Home } from "../Home/Home";
import { Chat } from "../Chat/pages/Chat";


export const AppRouter = (): ReactElement => {

  return (
    <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/chat" element={<Chat/>} />
    </Routes>
  )
}