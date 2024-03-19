import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCertificate, faEllipsis, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faBell, faCalendarDays, faEnvelope } from "@fortawesome/free-regular-svg-icons";
import Options from "./options";
import { Users } from "@/app/context/GlobalProvider";

export default function Biography({user}:{user:Users}) {
    return (
        <div className="text-white bg-black flex flex-col" >
            <img src={`${user.back ? user.back : "https://imgs.search.brave.com/-aRam-AmDbQa9FlruyF42muqOwXU8inDWb6IEy9gHoQ/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4u/cGl4YWJheS5jb20v/cGhvdG8vMjAyMS8w/Ni8yOS8wOC8wNy90/d2l0dGVyLWNvdmVy/LTYzNzM0OTNfMTI4/MC5qcGc"}`} alt="" />
            <img className="rounded-full border border-black absolute w-[80px] h-[80px] top-[190px] left-[20px] sm:left-[150px] sm:top-[220px] md:w-[120px] md:h-[120px] lg:w-[120px] lg:h-[120px] lg:left-[320px] lg:top-[160px]" src={user.avatar} alt="" />
            <section className="flex flex-col bg-black h-auto px-4 pt-3 gap-3 border-b-1 border-gray-400">
                <div className="flex justify-end gap-2">
                    <button className="border border-gray-500  rounded-full w-[35px] h-[35px]"><FontAwesomeIcon icon={faEllipsis} /></button>
                    <button className="border border-gray-500  rounded-full w-[35px] h-[35px]"><FontAwesomeIcon icon={faEnvelope}/></button>
                    <button className="border border-gray-500  rounded-full w-[35px] h-[35px]"><FontAwesomeIcon icon={faBell} /></button>
                    <button className="border border-gray-500  rounded-full text-[15px] font-bold w-[120px] h-[35px]">Siguiendo</button>
                </div>
                <div className="text-white">
                    <p className="font-bold text-[20px]">{user.name} <FontAwesomeIcon className="text-blue-500 w-4" icon={faCertificate} /></p>
                    <p className="text-gray-400">{user.username}</p>
                </div>
                <div className="text-[14px]">
                    <p>{user.bio}</p>
                </div>
                <div className="text-gray-400 text-[14px]">
                    <p className=""><FontAwesomeIcon icon={faLocationDot} /> {user.location}</p>
                    <p><FontAwesomeIcon icon={faCalendarDays} /> Se unió en {user.joined}</p>
                </div>
                <div className="text-white text-[14px] flex gap-2">
                    <p className="font-bold">{user.following} <span className="text-gray-400 font-normal">Seguiendo</span></p>
                    <p className="font-bold">{user.followers} <span className="text-gray-400 font-normal">Seguidores</span></p>
                </div>
                <Options />
            </section>
        </div>
    )
}