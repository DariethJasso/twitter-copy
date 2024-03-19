'use client'
import { useState } from "react"

export default function Options() {
    const [options, setOptions] = useState('foryou')
    return (
        <div className="border-b-1 border-gray-300/25 flex justify-center sm:fixed sm:w-[74%] sm:bg-opacity-50 sm:backdrop-blur-lg lg:w-[50%]">
            <button className="w-[30%] h-[50px] text-center flex flex-col items-center gap-2 pt-3 hover:bg-gray-300/10 " onClick={() => setOptions('foryou')}>
                <p className={`text-gray-400 text-[15px] ${options === 'foryou' ? 'text-white font-bold' : ''}`}>Para ti</p>
                <hr className={`w-[60px] h-1 bg-blue-500 rounded-md border-none ${options === 'foryou' ? 'flex' : 'hidden'}`}  />
            </button>

            <button className="w-[30%] h-[50px] text-center flex flex-col items-center gap-2 pt-3 hover:bg-gray-300/10" onClick={() => setOptions('Trending')}>
                <p className={`text-gray-400 text-[15px] ${options === 'Trending' ? 'text-white font-bold' : ''}`}>Tendencia</p>
                <hr className={`w-[60px] h-1 bg-blue-500 rounded-md border-none ${options === 'Trending' ? 'flex' : 'hidden'}`}  />
            </button>

            <button className="w-[30%] h-[50px] text-center flex flex-col items-center gap-2 pt-3 hover:bg-gray-300/10" onClick={() => setOptions('news')}>
                <p className={`text-gray-400 text-[15px] ${options === 'news' ? 'text-white font-bold' : ''}`}>Noticias</p>
                <hr className={`w-[60px] h-1 bg-blue-500 rounded-md border-none ${options === 'news' ? 'flex' : 'hidden'}`}  />
            </button>

            <button className="w-[30%] h-[50px] text-center flex flex-col items-center gap-2 pt-3 hover:bg-gray-300/10" onClick={() => setOptions('sports')}>
                <p className={`text-gray-400 text-[15px] ${options === 'sports' ? 'text-white font-bold' : ''}`}>Deportes</p>
                <hr className={`w-[60px] h-1 bg-blue-500 rounded-md border-none ${options === 'sports' ? 'flex' : 'hidden'}`}  />
            </button>

            <button className="w-[30%] h-[50px] text-center flex flex-col items-center gap-2 pt-3 hover:bg-gray-300/10" onClick={() => setOptions('entertainment')}>
                <p className={`text-gray-400 text-[15px] ${options === 'entertainment' ? 'text-white font-bold' : ''}`}>Entretenimiento</p>
                <hr className={`w-[60px] h-1 bg-blue-500 rounded-md border-none ${options === 'entertainment' ? 'flex' : 'hidden'}`}  />
            </button>
        </div>
    )
}