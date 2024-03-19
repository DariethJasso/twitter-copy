import { faArrowLeft, faCertificate } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export default function HeadName({name}:{name:string}){
    return(
        <div className=" bg-black flex justify-start text-white h-[50px]">
            <Link href={"/twitter"} className=" flex items-center justify-center w-[40px] h-[40px] m-1 hover:bg-gray-500/20 rounded-full"><FontAwesomeIcon icon={faArrowLeft} /></Link>
            <div className="flex flex-col ">
                <p className="text-[20px] font-bold">{name} <FontAwesomeIcon className="text-blue-500 w-4" icon={faCertificate} /></p>
                <p className="text-gray-400 text-[12px]"> 2.976 posts</p>
            </div>
            
        </div>
    )
}