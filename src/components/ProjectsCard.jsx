/* eslint-disable no-unsafe-optional-chaining */
/* eslint-disable react/prop-types */
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function ProjectsCard({ project }) {
    const { title } = project;
    const { url: imgSrc } = project?.image;

    return (
        <div className="group w-full h-fit rounded-3xl relative shadow-2xl cursor-pointer after:absolute after:w-full after:h-full after:bg-gradient-to-tr after:from-slate-900 after:to-white/10 after:to-60% after:top-0 after:rounded-3xl after:hidden hover:after:block">

            <div className="z-50 w-max bg-white p-8 rounded-[30px]">
                {imgSrc && <img src={imgSrc} alt={title + 'Image'} className="z-50 w-[450px] h-64 rounded-3xl shadow-xl" />}
            </div>
            <FontAwesomeIcon icon={faArrowRightLong} className="hidden group-hover:block absolute top-5 right-5 rounded-full text-xl text-orange-400 border-2 border-orange-400 py-[1rem] px-[1rem]" />
            <h1 className="absolute hidden group-hover:block left-5 bottom-5 text-white text-5xl font-bold z-10">{title}</h1>
        </div>
    )
}

export default ProjectsCard;