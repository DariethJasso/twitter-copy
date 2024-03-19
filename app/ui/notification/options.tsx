'use client'
import { useState } from "react"

export default function Options() {
    const [options, setOptions] = useState('all')
    return (
        <div className="border-b-1 border-gray-300/25 flex justify-center sm:fixed sm:w-[74%] sm:bg-opacity-50 sm:backdrop-blur-lg lg:w-[50%]">
            <button className="w-[33.3%] h-[50px] text-center flex flex-col items-center gap-2 pt-3 hover:bg-gray-300/10 " onClick={() => setOptions('all')}>
                <p className={`text-gray-400 ${options === 'all' ? 'text-white font-bold' : ''}`}>Todas</p>
                <hr className={`w-[60px] h-1 bg-blue-500 rounded-md border-none ${options === 'all' ? 'flex' : 'hidden'}`}  />
            </button>
            <button className="w-[33.3%] h-[50px] text-center flex flex-col items-center gap-2 pt-3 hover:bg-gray-300/10" onClick={() => setOptions('verified')}>
                <p className={`text-gray-400 ${options === 'verified' ? 'text-white font-bold' : ''}`}>Verificado</p>
                <hr className={`w-[60px] h-1 bg-blue-500 rounded-md border-none ${options === 'verified' ? 'flex' : 'hidden'}`}  />
            </button>
            <button className="w-[33.3%] h-[50px] text-center flex flex-col items-center gap-2 pt-3 hover:bg-gray-300/10" onClick={() => setOptions('mentions')}>
                <p className={`text-gray-400 ${options === 'mentions' ? 'text-white font-bold' : ''}`}>Menciones</p>
                <hr className={`w-[60px] h-1 bg-blue-500 rounded-md border-none ${options === 'mentions' ? 'flex' : 'hidden'}`}  />
            </button>
        </div>
    )
}