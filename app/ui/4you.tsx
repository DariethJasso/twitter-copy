'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function FourYou() {
    const pathname = usePathname();
    return (
        <div className="border-b-1 border-gray-300/25 flex justify-center sm:fixed sm:w-[74%] sm:bg-opacity-50 sm:backdrop-blur-lg lg:w-[50%] xl1:w-[40.5%]">
            <Link className="w-[50%] h-[50px] text-center flex flex-col items-center gap-2 pt-3 hover:bg-gray-300/10" href="/enter/main">
                <p className={`text-gray-400  ${pathname === '/enter/main' ? 'text-white font-bold' : ''}`}>Para ti</p>
                <hr className={`w-[60px] h-1 bg-blue-500 rounded-md border-none ${pathname === '/enter/main' ? 'flex' : 'hidden'}`}/>

            </Link>
            <Link className="w-[50%] h-[50px] text-center flex flex-col items-center gap-2 pt-3 hover:bg-gray-300/10" href="/enter/siguiendo">
                <p className={`text-gray-400 ${pathname === '/enter/siguiendo' ? 'text-white font-bold' : ''}`}>Siguiendo</p>
                <hr className={`w-[60px] h-1 bg-blue-500 rounded-md border-none ${pathname === '/enter/siguiendo' ? 'flex' : 'hidden'}`}  />
            </Link>
        </div>
    )
}