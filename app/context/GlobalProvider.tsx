'use client'
import axios from "axios";
import React, { useEffect } from "react";

export type Category = {
    category: string;
    score: number;
    icon: string;
}

export type Notification = {
    id: number;
    avatar: string;
    name: string;
    message: string;
    post?: string;
    group?: string;
    time: string;
}

export type Coffe = {
    id: number;
    image: string;
    name: string;
    popular: boolean;
    price: number;
    rating: number;
    votes: number;
    available?: boolean;
}
export type Users={
    id: number;
    name: string;
    username: string;
    email: string;
    back?:string;
    avatar: string;
    bio?: string;
    verified: boolean;
    followers: string;
    following: string;
    tweets: string;
    location: string;
    joined: string;
    
}
export type Tweet = {
    userId: number;
    id: number;

    timestamp: string;
    text: string;
    image?: string;
    comments?: number;
    likes?: number;
    retweets?: number;
    statistics?: string;
    categoria?: string;
   

}

export type Trend = {
    country: string;
    tendencia: string;
    posts: number;
}






export type DataGlobal = {
    summary: Category[];
    notification: Notification[];
    coffe: Coffe[];
    users: Users[];
    tweets: Tweet[];
    trends: Trend[];
    
    loading: boolean


}


const DataContext = React.createContext<DataGlobal>({
    summary : [],
    notification : [],
    coffe : [],
    users : [],
    tweets : [],
    trends : [],
    
    loading : true
});


const DataProvider = ({ children }:{children: React.ReactNode}) => {
    const [summary, setSummary] = React.useState<Category[]>([]);
    const [notification, setNotification] = React.useState<Notification[]>([]);
    const [coffe, setCoffe] = React.useState<Coffe[]>([]);
    const [loading,setLoading] = React.useState<boolean>(true);
    const [users, setUsers] = React.useState<Users[]>([]);
    const [tweets, setTweets] = React.useState<Tweet[]>([]);
    const [trends, setTrends] = React.useState<Trend[]>([]);

    const fectchSummary = async () => {
        try {
            const response = await axios.get('http://localhost:3030/categories');
            console.log(response.data);
            const summarys = await response.data;
            setSummary(summarys);
            
        } catch (error) {
            console.error('Error fetching summary:', error);
        }
    };

    const fetchNotifitication = async () => {
        try {
            const response = await axios.get('http://localhost:3030/notification');
            console.log(response.data);
            const notifications = await response.data;
            setNotification(notifications);
        }catch(error){
            console.error('Error fetching notification:', error);
        }
    }

    const fetchCoffe = async () => {
        try {
            const response = await axios.get('https://raw.githubusercontent.com/devchallenges-io/web-project-ideas/main/front-end-projects/data/simple-coffee-listing-data.json');
            console.log(response.data);
            const coffes = await response.data;
            setCoffe(coffes);

        } catch (error) {
            console.error('Error fetching coffe:', error);
        }
    }

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
        fectchSummary();
        fetchNotifitication();
        fetchCoffe();
        fetchUsers();
        fetchTweets();
        fetchTrends();
        
    },[]);
    return (
        <DataContext.Provider value={{ summary, notification, coffe,users, tweets, trends, loading, }}>
            {children}
        </DataContext.Provider>
    )
}

export default DataContext;
export { DataProvider };