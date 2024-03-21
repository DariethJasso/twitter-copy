import { useData } from "@/app/hook/useData";
import { faApple, faGoogle, faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { error } from "console";
import { Alert } from "@mui/material";
import {useRouter} from 'next/navigation';
import { useState } from "react";
export default function Login({onClose}:{onClose:()=>void}) {
    const {loginUser,user}=useData()
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [alert, setAlert] = useState<React.ReactNode | null>(null);
    const router = useRouter();

    const validate = async ()=>{
        if(!email){
            setAlert(<Alert severity="warning">Agrega un correo</Alert>);
        }else if(!password){
            setAlert(<Alert severity="warning">Agrega una contraseña</Alert>);
        }else{
            try{
                await handleLogin();
            }catch(error){
                setAlert(<Alert severity="error">Error al logear el usuario</Alert>);
            }
        }
    }
    const handleLogin = async ()=>{
        try{
            await loginUser(email, password);
            !user ? setAlert(<Alert severity="error">Error al logear el usuario</Alert>):(setAlert(<Alert severity="success">Login exitoso</Alert>), router.push('/enter/main'));
            
        }catch(error){
            setAlert(<Alert severity="error">Error al logear el usuario</Alert>);
        }
    }
    return(
        <main className="modal sm:backdrop-blur-[2px] absolute left-0 top-0 sm:h-screen sm:inset-0 sm:flex sm:justify-center sm:items-center">
            <section className="modal-content bg-black w-screen h-screen p-3 sm:w-[350px] sm:h-[600px] sm:rounded-3xl">
                <div className="modal-header flex justify-between">
                    <span className="close text-3xl" onClick={onClose}>&times;</span>
                    <FontAwesomeIcon className="text-3xl" icon={faXTwitter} />
                    <div></div>
                </div>
                <div className="flex flex-col gap-5 w-full p-2">
                    <p className="text-2xl font-bold">Inicia sesión en X</p>
                    <button className="bg-white rounded-3xl text-black flex items-center justify-center h-[40px] font-bold gap-2"><FontAwesomeIcon className="w-4" icon={faGoogle}/><p>Regístrarse con Google</p></button>
                    <button className="bg-white rounded-3xl text-black flex items-center justify-center h-[40px] font-bold gap-2"><FontAwesomeIcon className="w-4" icon={faApple}/><p>Regístrarse con Apple</p></button>
                    <div className="flex items-center gap-3">
                    <hr className="w-[158px] border-gray-300 bg-gray-700" />
                    <p>o</p>
                    <hr className="w-[158px] border-gray-300 bg-gray-700" />

                    </div>
                    <input type="text" placeholder="Email"
                    className="text-gray-400 bg-transparent border border-gray-500 rounded-sm h-[60px] p-3"
                    onChange={(e)=>setEmail(e.target.value)} />
                    
                    <input type="password" placeholder="Password"
                    className="text-gray-400 bg-transparent border border-gray-500 rounded-sm h-[60px] p-3"
                    onChange={(e)=>setPassword(e.target.value)} />

                    

                    <button className="bg-white text-black font-bold h-[50px] rounded-3xl" onClick={()=>{validate();}}>Iniciar</button>
                    {alert && <p>{alert}</p>}
                    <button className="text-white border border-gray-500 h-[50px] rounded-3xl font-bold">¿Olvidaste tu contraseña?</button>

                    <p>¿No tienes cuenta? <button className="text-blue-400" onClick={()=>{onClose();}}> Regístrate</button></p>
                </div>
                
            </section>
        </main>
    )
}