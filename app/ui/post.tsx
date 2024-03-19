
import { faCertificate, faEllipsis, faRetweet,faChartSimple,faArrowUpFromBracket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment, faHeart,faBookmark } from "@fortawesome/free-regular-svg-icons";
import { Tweet, Users } from "@/app/context/GlobalProvider";
import Link from "next/link";

export default function Post({tweet,user}:{tweet:Tweet,user:Users}) {
    const {timestamp, text, image, comments, retweets, likes,statistics} = tweet;
    const { id,name, username, avatar, verified } = user;
    return (
        <div className="border-1 border-gray-500/30">
            <div className="flex gap-2 p-1">
                <img src={avatar} alt={name} className="rounded-full w-10 h-10" />
                <div className="flex flex-col w-full">
                    <div className="flex justify-between ">
                        <div className="flex gap-1 items-center">
                            <Link href={`/enter/${id}/profile`} className=" text-[14px] text-white font-bold w-auto hover:underline">{name}</Link>
                            {
                                verified ? <FontAwesomeIcon className="text-blue-500 w-4" icon={faCertificate} /> : ''
                            }
                            <p className="text-gray-400 text-[14px]">{username}</p>
                            <p className="text-gray-400">·{timestamp}</p>
                        </div>
                       <FontAwesomeIcon className=" text-gray-400 hover:text-blue-500" icon={faEllipsis} />
                    </div>
                    <div className="flex flex-col gap-1">
                        <p className="text-white md:max-w-[500px] text-justify">{text}</p>
                        {
                            image ? <img src={image} alt="" className="rounded-lg max-h-[450px] max-w-[300px]  sm:max-w-[330px] md:max-w-[450px] sm:max-h-[700px]" /> : ''
                        }
                    </div>
                    <div className="flex items-center pt-2 justify-between">
                        <p className="text-gray-400 text-[14px] flex items-center gap-2 hover:text-blue-500"><FontAwesomeIcon className="text-gray-400 w-4 hover:text-blue-500" icon={faComment} />{comments}</p>
                        <p className="text-gray-400 text-[14px]
                        flex items-center gap-2 hover:text-green-500"><FontAwesomeIcon className="text-gray-400 w-4 hover:text-green-500" icon={faRetweet} />{retweets}</p>
                        <p className="text-gray-400 text-[14px] flex items-center gap-2 hover:text-red-500"><FontAwesomeIcon className="text-gray-400 w-4 hover:text-red-500" icon={faHeart} />{likes}</p> <p className="text-gray-400 text-[12px]"></p>
                        <p className="text-gray-400 text-[14px]  flex items-center gap-2 hover:text-blue-600"><FontAwesomeIcon className="text-gray-400 w-4 flex gap-2 hover:text-blue-600" icon={faChartSimple} />{statistics}</p>
                        <p className="text-gray-400 text-[14px] flex items-center gap-2"><FontAwesomeIcon className="text-gray-400 w-3 hover:text-blue-400" icon={faBookmark} /></p>
                        <p className="text-gray-400 text-[14px]"><FontAwesomeIcon className="text-gray-400 w-3 hover:text-blue-400" icon={faArrowUpFromBracket} /></p>


                    </div>
                </div>
            </div>
        </div>
    )
}