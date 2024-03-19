'use client'
import { useData } from "@/app/hook/useData";
import { faEllipsis } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Trends(){
    const {trends} = useData();
    return (
        <section className="border-r-1 border-gray-300/25 px-3 flex flex-col gap-3">
            {trends.map((trend) => (
                <article key={trend.tendencia} className="flex justify-between">
                <div className="flex flex-col justify-between text-white">
                    <p className="text-gray-400 text-[14px]">Tendencias en {trend.country}</p>
                    <p className="font-bold">{trend.tendencia}</p>
                    <p className="text-gray-400 text-[14px]">{trend.posts} mil post</p>
                </div>
                <FontAwesomeIcon className="text-gray-400" icon={faEllipsis}/>

                </article>  
            ))}
            
        </section>
    )
}