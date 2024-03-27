/* eslint-disable react/prop-types */
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function ServicesCard({ title, imgSrc }) {
    return (
        <div className="w-full h-fit border-2 border-white/30 rounded-[30px] pt-5 text-black bg-white/20 backdrop-blur-md relative before:absolute after:absolute before:w-[95%] after:w-[90%] before:h-[50%] after:h-[50%] before:bg-slate-400 after:bg-white/10 before:top-[10rem] after:top-[8.7rem] before:left-[2.5%] after:left-[5%] before:rounded-3xl after:rounded-3xl after:backdrop-blur-md before:backdrop-blur-md">
            <h3 className="text-[1.7rem] font-medium text-white border-b-2 border-white py-2 pb-6 px-8 max-w-96">{title}</h3>
            <div className="flex items-end mt-24">
                <div className="z-50 w-max bg-white p-8 rounded-[30px]">
                    {imgSrc && <img src={imgSrc} alt={title + 'Image'} className="z-50 w-[300px] h-72 rounded-3xl shadow-xl" />}
                </div>
            </div>
            <FontAwesomeIcon icon={faArrowRight} className="cursor-pointer -rotate-45 bg-orange-500 border-[10px] border-orange-300 hover:bg-orange-400 absolute -bottom-3 -right-5 z-50 text-[3.5rem] text-white rounded-full py-5 px-6" />
        </div>
    )
}

export default ServicesCard;