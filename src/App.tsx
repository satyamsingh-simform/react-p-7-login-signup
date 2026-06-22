import { BrowserRouter, Route, Routes} from "react-router";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import { Profile } from "./pages/Profile";
import { useAuth } from "./hook/useAuth";
import { PublicRoute } from "./routes/PublicRoute";
import { ProtectedRoute } from "./routes/ProtectedRoute";

export default function App() {
  const {isAuthenticated}=useAuth();
  console.log("is--->",isAuthenticated);
  
  return(
    <>
    <BrowserRouter>
      <Routes>
        <Route element={<PublicRoute/>}>
          <Route path="/" element={<Signup/>}></Route>
          <Route path="/login" element={<Login/>}></Route>
        </Route>
        <Route element={<ProtectedRoute/>}>
          <Route path="/profile" element={<Profile/>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  ) 
}
