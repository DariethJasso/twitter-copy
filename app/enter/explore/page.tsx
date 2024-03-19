import Options from "@/app/ui/explore/options";
import Trends from "@/app/ui/explore/trends";
import TweetsCategory from "@/app/ui/explore/tweetscategory";

export default function Explore() {
    return (
        <main className="bg-black sm:h-auto sm:flex sm:pl-[120px] lg:pl-[300px] lg:w-[74%] xl1:pl-[420px] xl1:w-screen">
            <section className="border-r-1 border-gray-300/25 xl:w-[700px] xl1:w-[1000px]">
                <div className="py-2 px-4 text-white text-2xl font-bold">Explore</div>
                <Options />
                <div className="pl-2 pb-4 sm:h-[50px]">

                </div>
                <Trends />
                <TweetsCategory />
            </section>
        </main>
    );
}