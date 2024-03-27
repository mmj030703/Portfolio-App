import { useSelector } from "react-redux";
import Container from "./Container";
import ProjectsCard from "./ProjectsCard";
import CarouselItemsCircles from "./CarouselItemsCircles";

function Projects() {
    const portfolioDetails = useSelector(store => store?.portfolioDetails?.portfolioDetails);
    const data = portfolioDetails?.user?.projects;
    const projects = [];
    data?.map(data => {
        projects.push(data);
    });
    projects.sort((a, b) => a.sequence - b.sequence);

    return (
        <section>
            <div className="font-poppins pt-20 pb-12 overflow-x-hidden">
                <Container>
                    <div className="ps-14 pe-5">
                        <div className="flex justify-between items-center">
                            <h2 className="text-4xl font-bold">Lets have a look at <p>my <span className="text-orange-400">Portfolio</span></p></h2>
                            <button className="py-4 px-7 text-white bg-orange-500 rounded-full">See All</button>
                        </div>
                        <div className="mt-14 w-max flex gap-x-24 py-5">
                            {
                                projects?.slice(0,6).map(project => project?.enabled ? <ProjectsCard key={project._id} project={project} /> : null)
                            }
                        </div>
                        <CarouselItemsCircles carouselItemsList={projects.slice(0,6)} circleBgColor="bg-orange-400" rowItemsNumber={2} />
                    </div>
                </Container>
            </div>
        </section>
    )
}

export default Projects;