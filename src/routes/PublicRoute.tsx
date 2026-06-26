import { useAuth } from "@/hook/useAuth"
import { Navigate, Outlet } from "react-router"

export const PublicRoute = () => {
    const {isAuthenticated}=useAuth()
  return (
    <>
    {
        isAuthenticated?<Navigate to='/profile' replace/>:<Outlet/>
    }
    </>
  )
}
