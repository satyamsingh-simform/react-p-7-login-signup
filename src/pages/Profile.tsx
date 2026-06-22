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
            <div className="p-10 w-200 shadow-md bg-radial from-pink-400 from-40% to-fuchsia-700">
                {
                    userArr.map((obj)=>(
                        <p key={obj?.email} className="flex flex-col gap-5 ">
                            <h1 className="text-center mb-5">PERSONAL INFO</h1>
                            <div className="flex justify-between">
                                <span className="border p-5 rounded-lg bg-linear-to-bl from-violet-100 to-fuchsia-100 text-gray-700">Name:{obj?.name}</span>
                                <span className="border p-5 rounded-lg bg-linear-to-bl from-violet-100 to-fuchsia-100 text-gray-700">lastName:{obj?.lastName}</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="border p-5 rounded-lg bg-linear-to-bl from-violet-100 to-fuchsia-100 text-gray-700">Gender:{obj?.gender}</span>
                                <span className="border p-5 rounded-lg bg-linear-to-bl from-violet-100 to-fuchsia-100 text-gray-700">Age:{obj?.age}</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="border p-5 rounded-lg bg-linear-to-bl from-violet-100 to-fuchsia-100 text-gray-700">State:{obj?.state}</span>
                                <span className="border p-5 rounded-lg bg-linear-to-bl from-violet-100 to-fuchsia-100 text-gray-700">City:{obj?.city}</span>
                            </div>
                            <span className="text-center border p-5 rounded-lg bg-linear-to-bl from-violet-100 to-fuchsia-100 text-gray-700">email:{obj?.email}</span>
                            <span className="text-center border p-5 rounded-lg bg-linear-to-bl from-violet-100 to-fuchsia-100 text-gray-700">Address:{obj?.address}</span>
                        </p>
                    ))
                }
            </div>
        </main>
    </div>
  )
}