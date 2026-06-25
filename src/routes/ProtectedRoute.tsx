import { useAuth } from "@/hook/useAuth"
import { Navigate, Outlet } from "react-router";

export const ProtectedRoute = () => {
    const {isAuthenticated}=useAuth();

  return (
    <>
        {
            isAuthenticated?<Outlet/>:<Navigate to='/' replace/>
        }
    </>
  )
}
