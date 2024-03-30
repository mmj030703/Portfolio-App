import { useSelector } from "react-redux";
import Container from "./Container";
import ProjectsCard from "./ProjectsCard";
import CarouselItemsCircles from "./CarouselItemsCircles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

function Projects() {
    const [carouselAtIndex, setCarouselAtIndex] = useState(0);

    const portfolioDetails = useSelector(store => store?.portfolioDetails?.portfolioDetails);
    const data = portfolioDetails?.user?.projects;
    const projects = [];
    data?.map(data => {
        projects.push(data);
    });
    projects.sort((a, b) => a.sequence - b.sequence);

    const projectsToDisplayLength = 6;
    const rowItemsNumber = 2;

    const moveRight = () => {
        const projectCards = document.querySelector('#projectCards');
        const widthToMove = projectCards.clientWidth;

        carouselAtIndex !== (projectsToDisplayLength / rowItemsNumber) - 1 ? setCarouselAtIndex(carouselAtIndex + 1) : null;
        projectCards.scrollLeft += widthToMove;
    };

    const moveLeft = () => {
        const projectCards = document.querySelector('#projectCards');
        const widthToMove = projectCards.clientWidth;

        carouselAtIndex !== 0 ? setCarouselAtIndex(carouselAtIndex - 1) : null;
        projectCards.scrollLeft -= widthToMove;
    };

    return (
        <section>
            <div className="font-poppins pt-20 pb-12">
                <Container className="relative">
                    <div className="ps-14 pe-5">
                        <div className="flex justify-between items-center">
                            <h2 className="text-4xl font-bold">Lets have a look at <p>my <span className="text-orange-400">Portfolio</span></p></h2>
                            <button className="py-4 px-7 text-white bg-orange-500 rounded-full">See All</button>
                        </div>
                        <div id="projectCards" className="scroll-smooth ps-12 pe-12 mt-14 w-full flex gap-x-24 py-5 overflow-hidden">
                            {
                                projects?.slice(0,projectsToDisplayLength).map(project => project?.enabled ? <ProjectsCard key={project._id} project={project} /> : null)
                            }
                        </div>
                        <CarouselItemsCircles activeItemColor='bg-orange-500' carouselAtIndex={carouselAtIndex} carouselItemsList={projects.slice(0, projectsToDisplayLength)} circleBgColor="bg-orange-300" rowItemsNumber={rowItemsNumber} />
                        <div className="absolute left-0 top-[53%] w-full flex justify-between">
                            <FontAwesomeIcon onClick={moveLeft} icon={faAngleLeft} className={`${carouselAtIndex === 0 ? 'pointer-events-none' : 'pointer-events-auto'} absolute bg-orange-400 text-3xl py-5 px-3 rounded-full hover:bg-orange-300 cursor-pointer`} />
                            <FontAwesomeIcon onClick={moveRight} icon={faAngleRight} className={`${(carouselAtIndex === (projectsToDisplayLength / rowItemsNumber) - 1) ? 'pointer-events-none' : 'pointer-events-auto'} absolute -right-2 bg-orange-400 text-3xl  py-5 px-3 rounded-full hover:bg-orange-300 cursor-pointer`} />
                        </div>
                    </div>
                </Container>
            </div>
        </section>
    )
}

export default Projects;