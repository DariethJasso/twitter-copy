'use client'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import NavBar1 from "./NavBar1";
import { NavBar2 } from "./NavBar2";
import { faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { Avatar } from "@nextui-org/react";
import { faFeather, faGear } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";


export default function Drawer(){
    const [isSticky, setIsSticky] = useState(false);
    const pathname = usePathname();

    const profileRegex = /^\/twitter\/\d+\/profile$/;


    useEffect(() => {
        const handleScroll = () => {
            const offset = window.scrollY;
            if (offset > 30) { // Ajusta este valor según necesites
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        };

        const mediaQuery = window.matchMedia('(max-width: 767px)'); // Define el tamaño de la pantalla para dispositivos móviles

        if (mediaQuery.matches) { // Verifica si la pantalla es móvil
            window.addEventListener('scroll', handleScroll);
        }

        // Limpiar el event listener al desmontar el componente
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <div className={`bg-black w-full h-[50px] sm:flex sm:flex-col sm:w-[120px] sm:h-screen sm:items-center sm:fixed lg:w-[300px] lg:items-start lg:pl-5 xl1:w-[420px] xl1:pl-[130px] border-r-1 border-gray-300/25 ${profileRegex.test(pathname) ? 'h-0':''}`}>
            <div className={`flex justify-center p-2 h-[50px] ${isSticky ? 'hidden h-0' : ''} sm:relative sm:pt-3 ${profileRegex.test(pathname) ? 'hidden':''}`}>
                <FontAwesomeIcon icon={faXTwitter} className="text-white text-2xl lg:text-3xl" />
            </div>
            <div className="flex flex-col gap-1 py-10 lg:py-7">
                <NavBar1 sticky={isSticky}  />
                <NavBar2 />
            </div>
            <button className={`fixed bottom-14 right-0 w-[50px] h-[50px] bg-[#1d9bf0] rounded-full mr-4 ${isSticky ? 'opacity-40' : ''}  sm:relative sm:-bottom-10 sm:left-2 text-white lg:w-[250px]`}><FontAwesomeIcon color="white" className=" p-1 lg:hidden" icon={faFeather} /><p className="hidden lg:block font-bold py-2 text-2xl lg:left-1">Postear</p></button>
            <div className={`fixed bottom-0 top-0 p-2  w-full h-[50px] ${isSticky ? 'hidden' : ''} ${profileRegex.test(pathname) ? 'hidden':''}  sm:w-[50px] sm:relative sm:mt-[180px]`}>

                <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026024d" size="sm" className="sm:w-[50px] sm:h-[50px]"  />
            </div>
            <div className={`md:hidden fixed bottom-0 top-0 left-[370px] p-2   w-full h-[50px] ${isSticky ? 'hidden' : ''} sm:left-[600px] sm:z-50 ${profileRegex.test(pathname) ? 'hidden':''}`}>
                <button className=" w-6 h-6 m-2 hover:bg-white/30 rounded-full"><FontAwesomeIcon color="white" className=" p-1" icon={faGear} /></button>
            </div>
        </div>
    )
}