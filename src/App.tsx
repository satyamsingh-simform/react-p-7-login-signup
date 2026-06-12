import { BrowserRouter, Route, Routes } from "react-router";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

export default function App() {
  return(
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Signup/>}></Route>
        <Route path="/signup" element={<Signup/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/profile" ></Route>
      </Routes>
    </BrowserRouter>
    </>
  ) 
}
