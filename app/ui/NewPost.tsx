'use client'
import { faArrowLeft, faEarthAmericas,faListUl,faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faImage,faCalendar } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Avatar } from "@nextui-org/react";
import { CircularProgress } from "@nextui-org/react";
import { useEffect, useState } from "react";
import { useData } from "../hook/useData";
import { Alert } from "@mui/material";
export default function NewPost({onClose,open}: {onClose: () => void,open:boolean}) {
    const [value,setValue] = useState(0)
    const [newTweets,setNewTweets] = useState("")
    const {user,setUser,newTweet} = useData();
    const [alert,setAlert] = useState<React.ReactNode | null>(null)

    const handlePost = async () =>{
        try {
            await newTweet(user?.id ||0,newTweets)
            setNewTweets("")
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div className={`modal ${open ? 'flex bg-black pt-[50px] ':'hidden'} absolute inset-0 sm:relative sm:h-auto sm:flex`}>
            <div className="modal-content flex sm:p-3 w-screen">
                <div className=" pt-5 flex flex-col">
                    <Avatar src={user?.avatar} size="md"  />
                    <button><FontAwesomeIcon onClick={onClose} icon={faArrowLeft} /></button>
                </div>
                <div className="w-[300px] sm:w-auto">
                    <textarea value={newTweets} className="bg-black w-[300px] text-white sm:w-full sm:h-[50px] sm:p-2 sm:rounded-lg border-none" placeholder="¿Que estas pensando?" onChange={(e)=>{setNewTweets(e.target.value);setValue((e) => (e >= 100 ? 0 : e + 1))}} />
                    <button className="text-[#1d9bf0] hover:bg-blue-500/50 rounded-full px-3 py-1 text-[13px] sm:text-[15px]"> <FontAwesomeIcon  icon={faEarthAmericas} /> Cualquier persona puede responder</button>
                    <hr/>
                    <div className="flex justify-between py-4 w-[100px]">
                        <div className="flex gap-2 p-2 text-[#1880c7] text-2xl w-[100px]">
                            <FontAwesomeIcon icon={faImage} />
                            <FontAwesomeIcon icon={faListUl} />
                            <FontAwesomeIcon icon={faCalendar} />
                            <FontAwesomeIcon icon={faLocationDot} />
                        </div>
                        {alert && <p className="">{alert}</p> }
                        <CircularProgress 
                        className="text-blue-500 pl-32"
                        aria-label=""
                        size="md"
                        value={value}
                        color="primary"
                        showValueLabel={true}
                        />
                        <button onClick={()=>{handlePost(); onClose();}} className="text-white bg-[#1d9bf0] hover:bg-blue-500/50 rounded-full px-3 py-1">Postear</button>
                    </div>
                </div>
            </div>
        </div>
    )
}