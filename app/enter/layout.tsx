'use client'
import { usePathname } from "next/navigation";
import Drawer from "../ui/Drawer";
import Prime from "../ui/Prime";
import Search from "../ui/Search";
import Top from "../ui/Top";
import Users from "../ui/Users";
import { User } from "@nextui-org/react";

export default function NetflixLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {

    const pathName = usePathname();

    // Expresión regular para verificar la URL con cualquier número después de '/twitter/'
    const profileRegex = /^\/enter\/\d+\/profile$/;

    return (
        <div className="sm:flex ">
            <Drawer/>
            {children}
            <section className="hidden gap-3 bg-black sm:flex md:w-[175px]  sm:h-screen sm:min-w-[80px] sm:max-w-[100px] md:max-w-[200px] lg:h-auto lg:w-screen lg:max-w-[400px] lg:flex-col lg:items-center xl:max-w-[700px] xl1:w-screen ">
                <div className="pt-14"></div>
                {
                    pathName === '/enter/main' || pathName === '/enter/siguiendo' ? (
                        <>
                            <Search />
                            <Prime />
                            <Top />
                            <Users />
                        </>
                    ) : pathName === '/enter/notification' ? (
                        <>
                            <Search />
                            <Top />
                            <Users />
                        </>
                    ) : pathName === '/enter/explore' ? (
                        <>
                            <Users />
                        </>
                    ) : profileRegex.test(pathName) ? (
                        <>
                            <Users />
                            <Top />
                        </>
                    ) : null
                }
            </section> 
        </div>
    );
}
