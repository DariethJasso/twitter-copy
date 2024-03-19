'use client'
import { useData } from "@/app/hook/useData";
import  Post  from "../post";

export default function TweetsProfile({ id }: { id: string }) {
    const { tweets,users } = useData();
    return(
        <>
            {
                tweets.filter((item) => item.userId == id).map((item) => (
                    <Post key={item.id} tweet={item} user={users.find(user => user.id == item.userId) || { id: 0, name: "", username: "", email: "", avatar: "", verified: false, followers: "", following: "", tweets: "", location: "", joined: "" }} />



                ))
            }      
        </>
    )
}