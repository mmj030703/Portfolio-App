import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

function SkillsSlider() {
    const portfolioDetails = useSelector(store => store?.portfolioDetails?.portfolioDetails);
    const skillList = portfolioDetails?.user?.skills;

    return (
        <section className="mt-20 bg-orange-500 pt-0 pb-[4rem] rounded-tl-[27px] rounded-br-[20px] overflow-hidden">
            <div className="w-max bg-white mb-3 flex gap-x-10 -rotate-[1.8deg] font-semibold text-4xl py-2 list-none">
                {skillList?.map(skill => <span key={skill?._id}><FontAwesomeIcon icon={faStar} className="text-3xl me-5 text-orange-500" /> {skill.name}</span>)}
            </div>
        </section>
    )
}

export default SkillsSlider;