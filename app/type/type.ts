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
export type User={
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
