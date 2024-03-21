'use client'
import axios from "axios";
import React, { useEffect } from "react";
import { Trend, Tweet, User, Users } from "../type/type";








export type DataGlobal = {
    users: Users[];
    tweets: Tweet[];
    trends: Trend[];
    user: User | null;
    loading: boolean;
    logout: () => void;
    setUser: (user: Users | null) => void;
    loginUser: (email: string, password: string) => void;
    registerUser: (name: string, email: string, password: string) => void;
    newTweet: (id: number, text: string) => void;
    fetchTweets: () => void; // Agrega la función fetchTweets
};

const DataContext = React.createContext<DataGlobal>({
    users: [],
    user: null,
    tweets: [],
    trends: [],
    loading: true,
    setUser: (user: Users | null) => {},
    loginUser: async () => {},
    registerUser: async () => {},
    newTweet: async () => {},
    logout: () => {},
    fetchTweets: () => {}, // Inicializa fetchTweets
});


const DataProvider = ({ children }:{children: React.ReactNode}) => {
    const [loading,setLoading] = React.useState<boolean>(true);
    const [users, setUsers] = React.useState<Users[]>([]);
    const [tweets, setTweets] = React.useState<Tweet[]>([]);
    const [trends, setTrends] = React.useState<Trend[]>([]);
    const [user, setUser] = React.useState<Users | null>(null);

    //Date
    const getRandomDate = () => {
        const months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
        const randomDay = Math.floor(Math.random() * 28) + 1; // Día aleatorio entre 1 y 28
        const randomMonthIndex = Math.floor(Math.random() * 12); // Mes aleatorio entre 0 y 11
        const randomYear = Math.floor(Math.random() * (2022 - 2015 + 1)) + 2015; // Año aleatorio entre 2015 y 2022
        return `${randomDay} ${months[randomMonthIndex]} ${randomYear}`;
      };
    //Post
    const newTweet = async (id: number, text: string) => {
        try {
            const currentDate = new Date();
            const timestamp = currentDate.toLocaleDateString()
            const response = await axios.post('http://localhost:3030/tweets', {
                userId: id,
                id: Math.floor(Math.random() * 1000) + 1, // Generar ID aleatorio
                timestamp,
                text,
                image: null,
                comments: 1,
                likes: 0,
                retweets: 0,
                statistics: "",
                categoria: "Trending",
            })
            fetchTweets();
        } catch (error) {
            console.error('Error posting tweet:', error);
        }
    }
    const registerUser = async (name: string, email: string, password: string) => {
        try {
            const response = await axios.post('http://localhost:3030/usuarios', {
                id: Math.floor(Math.random() * 1000) + 1, // Generar ID aleatorio
                name,
                email,
                password,
                username: `@${name}`,
                avatar:null,
                back:null,
                bio:"",
                verified: false,
                followers: "0",
                following: "0",
                tweets: "0",
                location: "",
                joined: getRandomDate(),


            })
        } catch (error) {
            console.error('Error registering user:', error);
        }
    }

    const loginUser = async (email: string, password: string) => {
        try {
            const response = await axios.get('http://localhost:3030/usuarios');
            const users = response.data;
            const foundUser = users.find((u: any) => u.email === email && u.password === password);
            
            if (foundUser) {
                // Guarda el usuario en el almacenamiento local
                localStorage.setItem('currentUser', JSON.stringify(foundUser));
                
                // Establece el usuario en el estado o en el contexto
                setUser(foundUser);
            } else {
                // Muestra un mensaje de error si el usuario no existe
                console.error('Usuario no encontrado.');
            }
        } catch (error) {
            console.error('Error al iniciar sesión:', error);
        }
    }

    const logout = () => {
        // Borra el usuario del localStorage
        localStorage.removeItem('currentUser');
        // Establece el estado del usuario como nulo
        setUser(null);
        // Redirige al usuario a la ruta "/"
        window.location.href = "/";
    }
    //Fetching
    const fetchUsers = async () => {
        try {
            setLoading(true);
            await new Promise((resolve) => setTimeout(resolve, 1000));
            setLoading(false);
            const response = await axios.get('http://localhost:3030/usuarios');
            console.log(response.data);
            const users = await response.data;
            setUsers(users);
        } catch (error) {
            console.error('Error fetching users:', error);
        }
    }

    const fetchTweets = async () => {
        try {
            setLoading(true);
            await new Promise((resolve) => setTimeout(resolve, 1000));
            setLoading(false);
            const response = await axios.get('http://localhost:3030/tweets');
            console.log(response.data);
            const tweets = await response.data;
            setTweets(tweets);
        } catch (error) {
            console.error('Error fetching tweets:', error);
        }
    }
    
    const fetchTrends = async () => {
        try {
            const response = await axios.get('http://localhost:3030/tendencias');
            console.log(response.data);
            const trends = await response.data;
            setTrends(trends);
        } catch (error) {
            console.error('Error fetching trends:', error);
        }
    }

    


    useEffect(() => {
        
        fetchUsers();
        fetchTweets();
        fetchTrends();
        
    },[]);
    return (
        <DataContext.Provider value={{ users, tweets, trends, loading,user,loginUser,registerUser, setUser, logout,newTweet,fetchTweets }}>
            {children}
        </DataContext.Provider>
    )
}

export default DataContext;
export { DataProvider };