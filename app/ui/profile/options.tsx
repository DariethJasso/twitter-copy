'use client'
import { useState } from "react"
export default function Options(){
    const [options, setOptions] = useState('posts')
    return(
        <div className="flex">
            <button className="w-[50%] h-[50px] text-center flex flex-col items-center gap-2 pt-3 px-1 hover:bg-gray-300/10" onClick={() => setOptions('posts')}>
                <p className={`text-gray-400 text-[15px] ${options === 'posts' ? 'text-white font-bold' : ''}`}>Posts</p>
                <hr className={`w-[60px] h-1 bg-blue-500 rounded-md border-none ${options === 'posts' ? 'flex' : 'hidden'}`}  />
            </button>

            <button className="w-[50%] h-[50px] text-center flex flex-col items-center gap-2 pt-3 px-1 hover:bg-gray-300/10" onClick={() => setOptions('respuestas')}>
                <p className={`text-gray-400 text-[15px] ${options === 'respuestas' ? 'text-white font-bold' : ''}`}>Respuestas</p>
                <hr className={`w-[60px] h-1 bg-blue-500 rounded-md border-none ${options === 'respuestas' ? 'flex' : 'hidden'}`}  />
            </button>

            <button className="w-[80%] h-[50px] text-center flex flex-col items-center gap-2 pt-3 px-1 hover:bg-gray-300/10" onClick={() => setOptions('fotos')}>
                <p className={`text-gray-400 text-[15px] ${options === 'fotos' ? 'text-white font-bold' : ''}`}>Fotos y videos</p>
                <hr className={`w-[60px] h-1 bg-blue-500 rounded-md border-none ${options === 'fotos' ? 'flex' : 'hidden'}`}  />
            </button>

            <button className="w-[50%] h-[50px] text-center flex flex-col items-center gap-2 pt-3 px-1 hover:bg-gray-300/10" onClick={() => setOptions('me gusta')}>
                <p className={`text-gray-400 text-[15px] ${options === 'me gusta' ? 'text-white font-bold' : ''}`}>Me gusta</p>
                <hr className={`w-[60px] h-1 bg-blue-500 rounded-md border-none ${options === 'me gusta' ? 'flex' : 'hidden'}`}  />
            </button>
        </div>
    )
}