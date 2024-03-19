'use client'
import { useData } from "@/app/hook/useData";
import Loading from "@/app/ui/loading";
import Biography from "@/app/ui/profile/biography";
import HeadName from "@/app/ui/profile/headname";
import TweetsProfile from "@/app/ui/profile/tweetsprofile";

export default function Profile({ params }: { params: { id: string } }) {
    const id = params.id
    parseInt(id)
    const { users,loading } = useData();
    const user = users.find(user => user.id == parseInt(id))||{}
  
    loading ? console.log(loading) : !user ?  <div className=" pl-[130px] text-white font-bold text-[30px]">Usuario no encontrado</div> : ""
    
    return (
        <section className="bg-black sm:h-auto sm:flex sm:flex-col sm:pl-[120px] lg:pl-[300px] lg:w-[150%] xl1:pl-[460px] xl1:w-screen">
            {
                loading ? <Loading /> : (
                    <>  
                        <HeadName name={user.name} />
                         <Biography user={user} />
                        <TweetsProfile id={id} />
                        
                    </>
                )
            }
            
        </section>
    );
}
