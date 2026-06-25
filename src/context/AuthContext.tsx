import { createContext, useEffect, useState, type ReactNode,} from "react";
import type { signupSchema } from "@/schema/signupSchema";
import type z from "zod";

type User = z.infer<typeof signupSchema>;

type AuthContextType = {
  user: User | null;
  isAuthenticated: boolean;
  login: (user: User) => void;
  logout: () => void;
};
export const AuthContext = createContext<AuthContextType | null>(null);

type AuthProviderProps = {
  children: ReactNode;
};
export function AuthProvider({children,}: AuthProviderProps) {
  const [user, setUser] = useState<User | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(()=>{
    const currentUser=localStorage.getItem('CURRENT_USER');
    
    if(currentUser){
      const parsedCurrentUser=JSON.parse(currentUser);
      setUser(parsedCurrentUser);
      setIsAuthenticated(true)
    }
  },[])

  function login(userData: User) {
    setUser(userData);
    setIsAuthenticated(true);
    localStorage.setItem('CURRENT_USER',JSON.stringify(userData));
  }
  function logout() {
    setUser(null);
    setIsAuthenticated(false);
    localStorage.removeItem("CURRENT_USER")
  }

  return(
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}