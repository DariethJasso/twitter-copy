import { useData } from "@/app/hook/useData";
import { faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Alert } from "@mui/material";
import { error } from "console";
import { useState } from "react";


export default function Register({ onClose }: { onClose: () => void }) {
    const { registerUser } = useData();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [alert, setAlert] = useState<React.ReactNode | null>(null); // Estado para la alerta
    
    const validate = async () => {
        if (!name) {
            setAlert(<Alert severity="warning">Agrega un nombre</Alert>);
        } else if (!email) {
            setAlert(<Alert severity="warning">Agrega un correo</Alert>);
        } else if (!password) {
            setAlert(<Alert severity="warning">Agrega una contraseña</Alert>);
        } else {
            try {
                await handleRegister(); // Espera a que handleRegister termine antes de mostrar la alerta de éxito
                setAlert(<Alert severity="success">Registro exitoso</Alert>);
            } catch (error) {
                setAlert(<Alert severity="error">Error al registrar el usuario</Alert>);
            }
        }
    };

    const handleRegister = async () => {
        await registerUser(name, email, password);
    };

    return (
        <main className="modal sm:backdrop-blur-[2px] absolute left-0 top-0 sm:h-screen sm:inset-0 sm:flex sm:justify-center sm:items-center">
            <section className="modal-content bg-black w-screen h-screen p-3 sm:w-[350px] sm:h-[600px] sm:rounded-3xl">
                <div className="modal-header flex justify-between">
                    <span className="close text-3xl" onClick={onClose}>&times;</span>
                    <FontAwesomeIcon className="text-3xl" icon={faXTwitter} />
                    <div></div>
                </div>
                <div className="flex flex-col gap-5 w-full p-2">
                    <p className="text-2xl font-bold">Crear cuenta</p>

                    <input type="text" placeholder="Nombre"
                        className="text-gray-400 bg-transparent border border-gray-500 rounded-sm h-[60px] p-3"
                        onChange={(e) => setName(e.target.value)} />

                    <input type="text" placeholder="Correo"
                        className="text-gray-400 bg-transparent border border-gray-500 rounded-sm h-[60px] p-3"
                        onChange={(e) => setEmail(e.target.value)} />

                    <input type="password" placeholder="Contraseña"
                        className="text-gray-400 bg-transparent border border-gray-500 rounded-sm h-[60px] p-3"
                        onChange={(e) => setPassword(e.target.value)} />

                    <button className="bg-btnblue font-bold h-[50px] rounded-3xl" onClick={validate}>Crear cuenta</button>
                    {alert} {/* Mostrar la alerta aquí */}
                </div>

            </section>
        </main>
    )
}
