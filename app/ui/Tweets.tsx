'use client'
import React, { useState, useEffect } from "react";
import Post from "./post";
import Loading from "./loading";
import { useData } from "../hook/useData";

export default function Tweets() {
    const { tweets, users, loading, fetchTweets } = useData();
    const [visibleTweets, setVisibleTweets] = useState(6);
    const [newTweetSent, setNewTweetSent] = useState(false);

    useEffect(() => {
        if (newTweetSent) {
            fetchTweets();
            setNewTweetSent(false); // Restablecer la bandera después de obtener los nuevos tweets
        }
    }, [newTweetSent, fetchTweets]);
    const showMoreTweets = () => {
        setVisibleTweets(prevVisibleTweets => prevVisibleTweets + 6);
    };

    return (
        <>
            {loading ? (
                <Loading />
            ) : (
                tweets.sort((a, b) => {
                    const dateA = a.timestamp.split('/').reverse().join('/');
                    const dateB = b.timestamp.split('/').reverse().join('/');
                    return new Date(dateB) - new Date(dateA);
                })
                .slice(0, visibleTweets)
                .map((tweet) => (
                    <Post
                        key={tweet.id}
                        tweet={tweet}
                        user={users.find(user => user.id == tweet.userId) || {
                            id: 0,
                            name: "",
                            username: "",
                            email: "",
                            avatar: "",
                            verified: false,
                            followers: "",
                            following: "",
                            tweets: "",
                            location: "",
                            joined: ""
                        }}
                    />
                ))
                
            )}

            {tweets.length > visibleTweets && (
                <div className="flex justify-center">
                    <button onClick={showMoreTweets} className="text-blue-500 w-[200px] h-[30px] border-1 border-blue-500 rounded-xl bg-blue-400/40 mb-[50px]">Mostrar más</button>
                </div>
            )}
        </>
    );
}
