import { useAuth } from "@/hook/useAuth"

export const Profile = () => {
    const {user,logout}=useAuth();
    const userArr=[user];
  return (
    <div>
        <header className="flex justify-between items-center shadow-md p-3 px-10 text-lg ">
            <span className="h-10 w-10 rounded-[50%] bg-amber-500 flex justify-around items-center text-2xl">
                {
                (user?.name.charAt(0) || '') + (user?.lastName.charAt(0) || '')
                }
            </span>
            <button onClick={()=>logout()} className="bg-black text-white hover:cursor-pointer hover:bg-red-500 border px-5 py-1 rounded-sm ">
                logout
            </button>
        </header>
        <main className="flex justify-center items-center m-5">
            <div className="p-10 shadow-md">
                {
                    userArr.map((obj)=>(
                        <p key={obj?.email} className="flex flex-col">
                            <span>Name:{obj?.name} {obj?.lastName}</span>
                            <span>Age:{obj?.age}</span>
                            <span>City:{obj?.city}</span>
                            <span>Address:{obj?.address}</span>
                        </p>
                    ))
                }
            </div>
        </main>
    </div>
  )
}