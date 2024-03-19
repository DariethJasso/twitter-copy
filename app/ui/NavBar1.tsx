import { faMessage } from "@fortawesome/free-regular-svg-icons"
import { faBell, faHome, faSearch } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Link from "next/link"

export default function NavBar1({sticky}: {sticky: boolean}) {

    const Link1 = [
        {
            name: "Inicio",
            url:"/enter/main",
            icon: faHome
        },
        {
            name: "Explora",
            url:"/enter/explore",
            icon: faSearch
        },
        {
            name: "Notificaciones",
            url:"/tenternotification",
            icon: faBell
        },
        {
            name:"Mensajes",
            url:"/enter/mensajes",
            icon: faMessage
        }
    ]
    return (
        <nav className={`bg-black h-[45px] fixed bottom-0 left-0 w-full ${sticky ? 'opacity-40' : ''} sm:relative sm:h-auto`}>
            <ul className="flex sm:flex-col justify-around items-center h-full sm:gap-3 lg:items-start lg:gap-1">
                {
                    Link1.map((link) => (
                        <div key={link.name} className="hover:bg-white/10 hover:rounded-full w-[50px] h-[50px] lg:w-[250px] md:gap-2 flex justify-center items-center lg:justify-start lg:pl-2">
                            <Link className="flex  text-2xl text-white  lg:items-center" href={link.url} ><FontAwesomeIcon icon={link.icon} /><p className="hidden lg:block lg:pl-4">{link.name}</p></Link>
                        </div>
                       
                    ))
                }
            </ul>
        </nav>
    )
}