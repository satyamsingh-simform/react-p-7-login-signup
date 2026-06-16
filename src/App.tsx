import { BrowserRouter, Navigate, Route, Routes} from "react-router";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import { Profile } from "./pages/Profile";
import { useAuth } from "./hook/useAuth";

export default function App() {
  const {isAuthenticated}=useAuth();
  console.log("is--->",isAuthenticated);
  
  return(
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Signup/>}></Route>
        <Route path="/signup" element={<Signup/>}></Route>
        <Route path="/login" element={isAuthenticated?<Navigate to='/profile'/>:<Login/>}></Route>
        <Route path="/profile" element={isAuthenticated?<Profile/>:<Navigate to='/login'/>}></Route>
      </Routes>
    </BrowserRouter>
    </>
  ) 
}
