import FourYou from "@/app/ui/4you";
import NewPost from "@/app/ui/NewPost";
import Tweets from "@/app/ui/Tweets";

export default function Siguiendo() {
    return (
        <main className="bg-black sm:h-auto sm:flex sm:pl-[120px] lg:pl-[300px] lg:w-[74%] xl1:pl-[460px] xl1:w-screen">
            <section className="border-r-1 border-gray-300/25 xl:w-[700px]">
                <FourYou />
                <div className="pl-2 pb-4 sm:h-[50px]">

                </div>
                <NewPost />
                <p className="text-white font-bold">Siguiendo:</p>
                <Tweets />
            </section>
            
        </main>
    )
}