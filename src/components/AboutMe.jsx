import { useSelector } from "react-redux";
import Container from "./Container";

function AboutMe() {
    const portfolioDetails = useSelector(store => store?.portfolioDetails?.portfolioDetails);
    const about = portfolioDetails?.user?.about;

    return (
        <section>
            <div className="bg-slate-100 pt-32 pb-20">
                <Container>
                    <div className="flex justify-center gap-x-10">
                        <div>
                            <img src={about?.avatar?.url} alt={about?.name + 'Image'} className="rounded-[60px] w-72" />
                        </div>
                        <div className="flex flex-col gap-y-10">
                            <h1 className="text-4xl font-bold">Why <span className="text-orange-400">Hire me</span>?</h1>
                            <p className="text-zinc-600 max-w-[750px] text-justify text-[15.5px]">{about?.description}</p>
                            <div className="flex gap-x-10">
                                <div>
                                    <p className="text-[1.9rem] font-semibold">{about?.some_total + '+'}</p>
                                    <p className="font-medium">Projects Completed</p>
                                </div>
                                <div>
                                    <p className="text-[1.9rem] font-semibold">{about?.exp_year + '+'}</p>
                                    <p className="font-medium">Experience</p>
                                </div>
                            </div>
                            <button className="rounded-full border-2 border-black font-semibold text-2xl py-3 px-5 hover:bg-orange-500 hover:text-white transition-all">View Projects</button>
                        </div>
                    </div>
                </Container>
            </div>
        </section>
    )
}

export default AboutMe;