import { faEllipsis } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Top(){
    return (
        <div className="hidden lg:block bg-[#16181c] p-3 rounded-xl lg:min-w-[300px] xl1:w-[360px]">
            <p className="text-white text-[25px]">Que esta pasando</p>
            <div className="flex justify-between text-white mt-3">
                <div>
                    <p className="text-[14px] text-gray-600">Tendencia en Mexico</p>
                    <p>Bruja del 71</p>
                    <p className="text-[14px] text-gray-600">1.566 post</p>
                </div>
                <FontAwesomeIcon icon={faEllipsis}/>
            </div>
            <div className="flex justify-between text-white mt-3">
                <div>
                    <p className="text-[14px] text-gray-600">Tendencia en Mexico</p>
                    <p>Quackity</p>
                    <p className="text-[14px] text-gray-600">17,2 mil post</p>
                </div>
                <FontAwesomeIcon icon={faEllipsis}/>
            </div>
            <div className="flex justify-between text-white mt-3">
                <div>
                    <p className="text-[14px] text-gray-600">Tendencia en Mexico</p>
                    <p>Dona Florinda</p>
                    <p className="text-[14px] text-gray-600">1.253 post</p>
                </div>
                <FontAwesomeIcon icon={faEllipsis}/>
            </div>
            <div className="flex justify-between text-white mt-3">
                <div>
                    <p className="text-[14px] text-gray-600">Tendencia en Mexico</p>
                    <p>#XochitlPegaChicles</p>
                    <p className="text-[14px] text-gray-600">1.425 post</p>
                </div>
                <FontAwesomeIcon icon={faEllipsis}/>
            </div>
            <div className="flex justify-between text-white mt-3">
                <div>
                    <p className="text-[14px] text-gray-600">Tendencia en Mexico</p>
                    <p>Lengua</p>
                    <p className="text-[14px] text-gray-600">15,5 mil post</p>
                </div>
                <FontAwesomeIcon icon={faEllipsis}/>
            </div>
        </div>
    )
}