'use client'
import React, { useState } from "react";
import Post from "./post";
import Loading from "./loading";
import { useData } from "../hook/useData";

export default function Tweets() {
    const {tweets,users,loading} = useData();
    const [visibleTweets, setVisibleTweets] = useState(6);
    // console.log(loading);
    console.log(users);
    
    const showMoreTweets = () => {
        setVisibleTweets(prevVisibleTweets => prevVisibleTweets + 6);
    };
    
    return (
        <>
            {loading ? (
                <Loading />
                ) : (
                    tweets.slice(0, visibleTweets).map((tweet) => {

                    // Buscar el usuario correspondiente al tweet
                    return (

                        <Post key={tweet.id} tweet={tweet} user={users.find(user => user.id == tweet.userId) || { id: 0, name: "", username: "", email: "", avatar: "", verified: false, followers: "", following: "", tweets: "", location: "", joined: "" }} />
                    )





                })
            )}

            {tweets.length > visibleTweets && (
                <div className="flex justify-center">
                    <button onClick={showMoreTweets} className="text-blue-500 w-[200px] h-[30px] border-1 border-blue-500 rounded-xl bg-blue-400/40 mb-[50px]">Mostrar más</button>
                </div>
            )}
        </>
    );
}
