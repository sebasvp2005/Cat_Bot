import {ReactElement} from "react";
import {Route, Routes} from "react-router-dom";
import { Chat } from "../Chat/pages/Chat";


export const AppRouter = (): ReactElement => {

  return (
    <Routes>
        <Route path="/" element={<Chat/>} />
    </Routes>
  )
}