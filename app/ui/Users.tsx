import { Avatar } from "@nextui-org/react";

export default function Users() {
    return (
        <div className="hidden lg:block bg-[#16181c] p-3 rounded-xl lg:min-w-[300px] xl1:w-[360px]">
            <h1 className="text-white font-bold text-[20px]">Sugerencias</h1>
            <div>
                <div className="flex justify-between text-white mt-3">
                    <div className="flex gap-2">
                        <Avatar  size="md" src="https://i.pravatar.cc/150?u=1" />
                        <div className="flex flex-col">
                            <p>PlayStation</p>
                            <p className="text-gray-400 text-1">@PlayStation</p>
                        </div>
                    </div>
                    <button className=" bg-white text-black hover:bg-blue-500/50 rounded-full px-3 py-1 w-[80px] h-[40px]">Follow</button>
                </div>
            </div>
            <div>
                <div className="flex justify-between text-white mt-3">
                    <div className="flex gap-2">
                        <Avatar  size="md" src="https://imgs.search.brave.com/KyERIEJCcPNsS-osic2BUMWCHP8deE5AY1rgb57DwQo/rs:fit:860:0:0/g:ce/aHR0cHM6Ly90aGVm/YWRlci1yZXMuY2xv/dWRpbmFyeS5jb20v/cHJpdmF0ZV9pbWFn/ZXMvd183NjAsY19s/aW1pdCxmX2F1dG8s/cV9hdXRvOmJlc3Qv/R2V0dHlJbWFnZXMt/MTQyOTI3NzU5OF9w/YWplemkvYmFkLWJ1/bm55LmpwZw" />
                        <div className="flex flex-col">
                            <p>BadBunny🐰</p>
                            <p className="text-gray-400 text-1">@badbunny</p>
                        </div>
                    </div>
                    <button className=" bg-white text-black hover:bg-blue-500/50 rounded-full px-3 py-1 w-[80px] h-[40px]">Follow</button>
                </div>
            </div>
            <div>
                <div className="flex justify-between text-white mt-3">
                    <div className="flex gap-2">
                        <Avatar  size="md" src="https://imgs.search.brave.com/R_i-AB684ktpwT6X8OS95OyFDzTaJqkf9JYEV006SHI/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9sYWJp/b2RlLmNvbS93cC1j/b250ZW50L3VwbG9h/ZHMvMjAyMi8wOS9F/bC1NYXJpYW5hLXN0/cmVhbWVyLmpwZw" />
                        <div className="flex flex-col">
                            <p>El Mariana 🤙🏻</p>
                            <p className="text-gray-400 text-1">@elmariana</p>
                        </div>
                    </div>
                    <button className=" bg-white text-black hover:bg-blue-500/50 rounded-full px-3 py-1 w-[80px] h-[40px]">Follow</button>
                </div>
            </div>
            <p className="text-blue-500">Show more</p>
        </div>
    )
}
