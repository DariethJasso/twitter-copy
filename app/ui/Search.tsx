import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Search(){
    return(
        <div className="hidden lg:flex lg:min-w-[300px] lg:w-auto bg-[#16181c] p-3 rounded-full h-[60px] mt-3 xl1:w-[360px] md:fixed">
            <div className="flex items-center gap-2">
                <FontAwesomeIcon icon={faSearch} className="text-gray-400 text-[20px]"/>
                <input className="w-full h-[60px] bg-[#16181c] text-white pl-5" type="text" placeholder="Buscar..."/>
            </div>
        </div>
    )
}