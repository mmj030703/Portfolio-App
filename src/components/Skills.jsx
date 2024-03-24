import { useSelector } from "react-redux";
import Container from "./Container";

function Skills() {
    const portfolioDetails = useSelector(store => store?.portfolioDetails?.portfolioDetails);
    const data = portfolioDetails?.user?.skills;
    const skills = [];
    data?.map(data => {
        skills.push(data);
    });

    const skillsMeter = [];
    skills.map(skill => {
        const skillMeter = [];
        const skillCount = Math.round(skill.percentage / 10); 
        console.log(skill.percentage, skillCount);
        for (let i = 1; i <= 10; i++) {
            skillMeter.push(<span key={Math.random()} className={`w-4 h-4 ${i <= skillCount ? 'bg-orange-500' : 'bg-white border-2 border-black'} block rounded-full hover:scale-110`}></span>);
        }
        skillsMeter.push(skillMeter);
    });

    return (
        <section>
            <div className="bg-slate-100 pt-32 pb-20 rounded-[2.5rem]">
                <Container> 
                    <div className="ps-14 pe-5">
                        <div className="flex justify-between">
                            <h1 className="text-4xl font-bold">My <span className="text-orange-400">Skills</span></h1>
                        </div>
                        <div className="grid grid-cols-2 gap-x-10 gap-y-16 mt-10">
                            {skills?.map((skill, index) => skill?.enabled ? (                                
                                <div key={skill?._id} className="relative flex gap-x-5 items-center">
                                    <p className="text-2xl font-semibold">{skill.name}</p>
                                    <div className="flex gap-x-3 absolute left-[160px]">
                                        {skillsMeter[index]}
                                    </div>
                                </div>
                            ): null)}
                        </div>
                    </div>
                </Container>
            </div>
        </section>
    )
}

export default Skills;