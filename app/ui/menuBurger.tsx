import { faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { faBookmark, faUser } from "@fortawesome/free-regular-svg-icons";
import { faAd, faCog, faDollarSign, faList, faSignOut, faUserGroup } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Avatar } from "@nextui-org/react";
import Link from "next/link";
import { Users } from "../type/type";
import { useEffect, useRef } from "react";
import { useData } from "../hook/useData";

export default function MenuBurger({user,openMenuAvatar,setOpenMenuAvatar}:{user:Users,openMenuAvatar:boolean,setOpenMenuAvatar:(open:boolean)=>void}) {
    const {logout} = useData();
    const menuRef = useRef<HTMLDivElement>(null); // Ref para el contenedor del menú

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            const target = event.target as HTMLElement;

            // Si el clic ocurre fuera del menú y el menú está abierto, ciérralo
            if (menuRef.current && !menuRef.current.contains(target) && openMenuAvatar) {
                setOpenMenuAvatar(false);
            }
        };

        // Agregar el manejador de evento de clic al montar el componente
        document.addEventListener('mousedown', handleClickOutside);

        // Limpiar el manejador de evento al desmontar el componente
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [openMenuAvatar, setOpenMenuAvatar]);
    const {name,id,avatar,username,following,followers} = user
    const Links = [
        {
            name:"Perfil",
            url:`/enter/${id}/profile`,
            icon: faUser
        },
        {
            name:"Premium",
            url:"/enter/premium",
            icon: faXTwitter
        },
        {
            name:"Listas",
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
            name:"Monetizacion",
            url:"/enter/monetizacion",
            icon:faDollarSign
        },
        {
            name:"Anuncios",
            url:"/enter/anuncios",
            icon:faAd
        },
        {
            name:"Configuracion",
            url:"/enter/configuracion",
            icon:faCog
        }
    ]
    return (
        <div ref={menuRef} className={`bg-black fixed text-white w-[300px] h-screen border-r-1 top-0 ${!openMenuAvatar ? "hidden" : "flex z-50"} p-4` }>
            <div className="flex flex-col gap-4 w-full">
                <div className="flex justify-between">
                    <Link href={`/enter/${id}/profile`}>
                    <Avatar className="cursor-pointer" size="md" src={avatar} /></Link>
                    <button className="text-white text-3xl rounded-full h-[40px] w-[40px] border border-gray-400">+</button>
                </div>
                <div>
                    <Link href={`/enter/${id}/profile`}><p className="text-2xl font-bold hover:underline">{name}</p></Link>
                    <p className="text-gray-400 text-[20px]">{username}</p>
                </div>
                <div className="flex justify-between">
                    <p className="text-gray-500"><span className="text-white font-bold">{followers}</span> Seguidores</p>
                    <p className="text-gray-500"><span className="text-white font-bold">{following}</span> Siguiendo</p>
                </div>
                <div className="flex flex-col">
                    {
                        Links.map((link) => (
                            
                                <Link 
                                key={link.name} className="flex  text-2xl text-white  hover:bg-gray-600/20 h-[50px] items-center gap-4" href={link.url} ><FontAwesomeIcon className="w-[30px]" icon={link.icon} /><p className="font-semibold" >{link.name}</p></Link>
                            
                        ))
                    }
                     <button className="flex text-2xl text-white hover:bg-gray-600/20 h-[50px] items-center gap-4" onClick={logout}>
                        <FontAwesomeIcon className="w-[30px]" icon={faSignOut} />
                        <p className="font-semibold">Cerrar Sesión</p>
                    </button>
                </div>
            </div>
        </div>
    )
}