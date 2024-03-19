import Options from "@/app/ui/notification/options";

export default function Notification(){
    return (
        <main className=" bg-black h-screen sm:h-screen sm:flex sm:pl-[120px] lg:pl-[300px] lg:w-[74%] xl1:pl-[460px]">
            <section className="border-r-1 border-gray-300/25 xl:w-[700px] xl1:w-[1000px]">
                <div className="py-2 px-4 text-white text-2xl font-bold">Notificaciones</div>
                <Options />
                <div className="pl-2 pb-4 sm:h-[50px]">

                </div>
                <article className=" px-5 flex flex-col gap-2 items-center py-5">
                    <h1 className="text-white font-bold text-3xl">No hay notificaciones todavia</h1>
                    <p className="text-gray-500 text-[15px] lg:w-[400px]">Desde me gusta hasta publicaciones repetidas y mucho más, aquí es donde sucede toda la acción.</p>
                </article>
            </section>
        </main>
    )
}