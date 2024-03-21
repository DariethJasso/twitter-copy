import { faXTwitter } from "@fortawesome/free-brands-svg-icons"
import { faUser } from "@fortawesome/free-regular-svg-icons"
import { faBookmark, faList } from "@fortawesome/free-solid-svg-icons"
import { faUserGroup } from "@fortawesome/free-solid-svg-icons/faUserGroup"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Link from "next/link"
type Props={
    id:number
}
export function NavBar2({id}:Props) {
    const profileRegex = /^\/enter\/\d+\/profile$/;

    const Link2 = [
        {
            name:"Lista Fijadas",
            url:"/enter/listaFijada",
            icon: faList
        },
        {
            name:"Guardados",
            url:"/enter/guardados",
            icon: faBookmark
        },
        {
            name:"Comunidades",
            url:"/enter/comunidades",
            icon:faUserGroup
        },
        {
            name:"Premium",
            url:"/enter/premium",
            icon: faXTwitter
        },
        {
            name:"Perfil",
            url:`/enter/${id}/profile`,
            icon:faUser
        }


    ]
    return (
        <nav className="hidden sm:flex sm:justify-center">
            <ul className="flex sm:flex-col justify-around items-center h-full md:gap-2 lg:gap-1 lg:justify-start">
                {
                    Link2.map((link) => (
                        <div key={link.name} className="hover:bg-white/10 hover:rounded-full w-[50px] h-[50px] lg:w-[250px] flex justify-center items-center lg:justify-start lg:pl-2">
                            <Link className="flex  text-2xl text-white  lg:items-center" href={link.url} ><FontAwesomeIcon icon={link.icon} /><p className="hidden lg:block lg:pl-4">{link.name}</p></Link>
                        </div>
                       
                    ))
                }
            </ul>
        </nav>
    )
}