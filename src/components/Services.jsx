import { useSelector } from "react-redux";
import Container from "./Container";
import ServicesCard from "./ServicesCard";
import CarouselItemsCircles from "./CarouselItemsCircles";

function Services() {
    const portfolioDetails = useSelector(store => store?.portfolioDetails?.portfolioDetails);
    const services = portfolioDetails?.user?.services;

    return (
        <section>
            <div className="font-poppins -z-50 bg-gradient-to-r from-gray-900 to-stone-800 text-white rounded-[2.5rem] pt-20 pb-12">
                <Container>
                    <div className="ps-14 pe-5">
                        <h2 className="text-4xl font-bold">My <span className="text-orange-400">Services</span></h2>
                        <div className="flex gap-x-10 mt-14 overflow-hidden">
                            {
                                services?.map(service => service?.enabled ? <ServicesCard key={service._id} title={service?.name} imgSrc={service?.image?.url} /> : null)
                            }
                        </div>
                        <CarouselItemsCircles carouselItemsList={services} />
                    </div>
                </Container>
            </div>
        </section>
    )
}

export default Services;