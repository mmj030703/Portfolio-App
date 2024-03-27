/* eslint-disable no-unsafe-optional-chaining */
/* eslint-disable react/prop-types */
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function ProjectsCard({ project }) {
    const { title  } = project;
    const { url: imgSrc  } = project?.image;

    return (
        <div className="group w-fit inline-block rounded-3xl relative shadow-2xl cursor-pointer after:absolute after:w-full after:h-full after:bg-gradient-to-tr after:from-slate-900 after:to-white/10 after:to-60% after:top-0 after:rounded-3xl overflow-hidden after:hidden hover:after:block">
            <img src={imgSrc} className="w-[550px]" alt="Project Image" />
            <FontAwesomeIcon icon={faArrowRightLong} className="hidden group-hover:block absolute top-5 right-5 rounded-full text-xl text-orange-400 border-2 border-orange-400 py-[1rem] px-[1rem]" />
            <h1 className="absolute hidden group-hover:block left-5 bottom-5 text-white text-5xl font-bold z-10">{title}</h1>
        </div>
    )
}

export default ProjectsCard;