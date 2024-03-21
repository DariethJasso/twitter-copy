'use client'
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXTwitter } from "@fortawesome/free-brands-svg-icons/faXTwitter";
import { faApple, faGoogle } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";
import Register from "./ui/register/register";
import Alert from "@mui/material";
import Login from "./ui/login/login";
import { useRouter } from "next/navigation";
export default function Home() {
  const [isModalRegisterOpen, setIsModalRegisterOpen] = useState(false);
  const [isModalLoginOpen, setIsModalLoginOpen] = useState(false);

  const router = useRouter();

  useEffect(() => {
      // Verificar si hay un usuario en el almacenamiento local
      const storedUser = localStorage.getItem('currentUser');
      if (storedUser) {
          // Redirigir automáticamente a la ruta '/enter/main'
          router.replace('/enter/main');
      }
  }, [router]);
  const handleModalRegisterOpen = () => {
    setIsModalRegisterOpen(true);
  }

  const handleModalRegisterClose = () => {
    setIsModalRegisterOpen(false);
  }

  const handleModalLoginOpen = () => {
    setIsModalLoginOpen(true);
  }

  const handleModalLoginClose = () => {
    setIsModalLoginOpen(false);
  }
  return (
    <main className="bg-black flex flex-col gap-[60px] p-8 w-auto sm:h-screen lg:h-auto 2xl:h-screen justify-between">
      <div className="flex flex-col h-auto gap-10 items-center lg:flex-row xl:gap-[100px] xl:p-6 2xl:gap-[200px] 2xl:pl-[200px]">
        <div className="flex items-start w-auto lg:w-auto">
          <FontAwesomeIcon className="text-[43px] lg:text-[200px] xl:text-[400px]" icon={faXTwitter} />

        </div>
        <article className="flex flex-col  gap-4">
          <p className="text-[43px] sm:text-[65px] sm:w-[500px] font-bold leading-tight">Lo que está pasando ahora</p>
          <div className="flex flex-col gap-3 pt-4 w-[310px]">
            <p className="text-[23px] font-bold">Únete hoy</p>
            <button className="bg-white rounded-3xl text-black flex items-center justify-center h-[40px] font-bold gap-2"><FontAwesomeIcon className="w-4" icon={faGoogle}/><p>Regístrarse con Google</p></button>
            <button className="bg-white rounded-3xl text-black flex items-center justify-center h-[40px] font-bold gap-2"><FontAwesomeIcon className="w-4" icon={faApple}/><p>Regístrarse con Apple</p></button>
            <div className="flex items-center gap-3">
              <hr className="w-[158px] border-gray-300 bg-gray-700" />
              <p>o</p>
              <hr className="w-[158px] border-gray-300 bg-gray-700" />

            </div>
            <button className="h-[40px] rounded-3xl bg-btnblue font-bold" onClick={handleModalRegisterOpen}><p>Crear cuenta</p></button>
            <p className="text-gray-500 text-[11px]">Al registrarte, aceptas los <span className="text-blue-500">Términos de servicio</span> y la <span className="text-blue-500">Política de privacidad</span>, incluida la politica de <span className="text-blue-500">Uso de Cookies</span>.</p>
            {
              isModalRegisterOpen ? <Register onClose={handleModalRegisterClose} /> : null
            }
          </div>
          <div className="flex flex-col gap-3 w-[310px]">
            <p className=" text-[17px] font-bold pt-8">¿Ya tienes una cuenta?</p>
            <button onClick={handleModalLoginOpen} className="h-[40px] rounded-3xl border-1 border-gray-500 bg-transparent font-bold text-blue-400">Iniciar Sesion</button>
            {
              isModalLoginOpen ? <Login onClose={handleModalLoginClose} /> : null
            }
            
          </div>
        </article>
      </div>
      <div className="flex flex-wrap gap-3 text-gray-500 text-[12px] justify-center">
        <p>Informacion</p>
        <p>Descarga la app de x</p>
        <p>Centro de Ayuda</p>
        <p>Condiciones de Servicio</p>
        <p>Política de privacidad</p>
        <p>Uso de Cookies</p>
        <p>Accesibilidad</p>
        <p>Inforamcion de anuncios</p>
        <p>Blog</p>
        <p>Estado</p>
        <p>Empleos</p>
        <p>Recursos para marcas</p>
        <p>Publicidad</p>
        <p>Marketing</p>
        <p>X para empresas</p>
        <p>Desarrolladores</p>
        <p>Guia</p>
        <p>Configuracion</p>
        <p>© 2024 X Corp.</p>
      </div>
    </main>
  );
}
