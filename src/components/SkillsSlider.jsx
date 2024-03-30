import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

function SkillsSlider() {
    const portfolioDetails = useSelector(store => store?.portfolioDetails?.portfolioDetails);
    const skillList = portfolioDetails?.user?.skills;
    
    return (
        <section className="mt-20 bg-orange-500 pt-[2.5rem] pb-[1rem] rounded-tl-[20px] flex rounded-br-[14px] overflow-hidden">
            <div className="animate-slider pe-5 w-max bg-white mb-3 flex gap-x-10  font-semibold text-4xl py-5 list-none">
                {skillList?.map(skill => <span key={skill?._id} className="w-max"><FontAwesomeIcon icon={faStar} className="text-4xl me-5 text-orange-500" /> {skill.name}</span>)}
            </div>
            <div className="animate-slider ps-5 w-max bg-white mb-3 flex gap-x-10 font-semibold text-4xl py-5 list-none">
                {skillList?.map(skill => <span key={skill?._id} className="w-max"><FontAwesomeIcon icon={faStar} className="text-4xl me-5 text-orange-500" /> {skill.name}</span>)}
            </div>
        </section>
    )
}

export default SkillsSlider;