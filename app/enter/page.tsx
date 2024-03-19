'use client'
import { useRouter } from "next/navigation";
import Loading from "../ui/loading";
import { useEffect, useState } from "react";

export default function Enter() {
    const router = useRouter();
    const [showSpinner, setShowSpinner] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowSpinner(false); // Ocultar el spinner después de 2 segundos
            router.push('/enter/main'); // Redirigir después de 2 segundos
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <main className="bg-black sm:h-auto sm:flex sm:pl-[120px] lg:pl-[300px] lg:w-[74%] xl1:pl-[420px] xl1:w-screen">
            {showSpinner && <Loading />}
        </main>
    );
}
