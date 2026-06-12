import Login from "./pages/Login";
import Signup from "./pages/Signup";

export default function App() {
  return(
    <div className="min-h-screen flex flex-col gap-5 justify-center items-center p-10 border-2 border-red-500">
      <Signup/>
      <Login/>
    </div>
  ) 
}
