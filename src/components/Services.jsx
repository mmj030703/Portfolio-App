import { useSelector } from "react-redux";
import Container from "./Container";
import ServicesCard from "./ServicesCard";
import CarouselItemsCircles from "./CarouselItemsCircles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

function Services() {
    const [carouselAtIndex, setCarouselAtIndex] = useState(0);

    const portfolioDetails = useSelector(store => store?.portfolioDetails?.portfolioDetails);
    const services = portfolioDetails?.user?.services;

    const rowItemsNumber = 3;

    const moveRight = () => {
        const serviceCards = document.querySelector('#serviceCards');
        const widthToMove = serviceCards.scrollWidth;

        carouselAtIndex !== services?.length ? setCarouselAtIndex(carouselAtIndex + 1) : null;
        serviceCards.scrollLeft += widthToMove;
    };

    const moveLeft = () => {
        const serviceCards = document.querySelector('#serviceCards');
        const widthToMove = serviceCards.scrollWidth;

        carouselAtIndex !== 0 ? setCarouselAtIndex(carouselAtIndex - 1) : null;
        serviceCards.scrollLeft -= widthToMove;
    };

    return (
        <section>
            <div className="font-poppins -z-50 bg-gradient-to-r from-gray-900 to-stone-800 text-white rounded-[2.5rem] pt-20 pb-12">
                <Container className="relative">
                    <div className="ps-14 pe-5">
                        <h2 className="text-4xl font-bold">My <span className="text-orange-400">Services</span></h2>
                        <div id="serviceCards" className="scroll-smooth flex w-full gap-x-[2.6rem] mt-14 overflow-hidden">
                            {
                                services?.map(service => service?.enabled ? <ServicesCard key={service._id} title={service?.name} imgSrc={service?.image?.url} /> : null)
                            }
                        </div>
                        <CarouselItemsCircles activeItemColor='bg-orange-500' rowItemsNumber={rowItemsNumber} carouselAtIndex={carouselAtIndex} carouselItemsList={services} />
                    </div>
                    <div className="absolute left-0 top-[38%] w-full flex justify-between">
                        <FontAwesomeIcon onClick={moveLeft} icon={faAngleLeft} className={`${carouselAtIndex === 0 ? 'pointer-events-none' : 'pointer-events-auto'} absolute -left-3 bg-orange-500 text-3xl py-20 px-5 rounded-full hover:bg-orange-400 cursor-pointer`} />
                        <FontAwesomeIcon onClick={moveRight} icon={faAngleRight} className={`${(carouselAtIndex === (services?.length / rowItemsNumber)-1) ? 'pointer-events-none' : 'pointer-events-auto'} absolute -right-2 bg-orange-500 text-3xl  py-20 px-5 rounded-full hover:bg-orange-400 cursor-pointer`} />
                    </div>
                </Container>
            </div>
        </section>
    )
}

export default Services;