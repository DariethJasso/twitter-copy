'use client'
import { faEarthAmericas,faListUl,faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faImage,faCalendar } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Avatar } from "@nextui-org/react";
import { CircularProgress } from "@nextui-org/react";
import { useEffect, useState } from "react";

export default function NewPost(){
    const [value,setValue] = useState(0)
    
    return (
        <div className="sm:h-auto hidden sm:flex">
            <div className="flex sm:p-3">
                <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026024d" size="md"  />
                <div>
                    <textarea className="bg-black text-white sm:w-full sm:h-[50px] sm:p-2 sm:rounded-lg border-none" placeholder="¿Que estas pensando?" onChange={(e)=>setValue((e) => (e >= 100 ? 0 : e + 1))} />
                    <button className="text-[#1d9bf0] hover:bg-blue-500/50 rounded-full px-3 py-1"> <FontAwesomeIcon  icon={faEarthAmericas} /> Cualquier persona puede responder</button>
                    <hr/>
                    <div className="flex justify-between py-4">
                        <div className="flex gap-2 p-2 text-[#1880c7] text-2xl">
                            <FontAwesomeIcon icon={faImage} />
                            <FontAwesomeIcon icon={faListUl} />
                            <FontAwesomeIcon icon={faCalendar} />
                            <FontAwesomeIcon icon={faLocationDot} />
                        </div>
                        <CircularProgress 
                        className="text-blue-500 pl-32"
                        aria-label=""
                        size="md"
                        value={value}
                        color="primary"
                        showValueLabel={true}
                        />
                        <button className="text-white bg-[#1d9bf0] hover:bg-blue-500/50 rounded-full px-3 py-1">Postear</button>
                    </div>
                </div>
            </div>
        </div>
    )
}