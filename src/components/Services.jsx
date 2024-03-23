import { useSelector } from "react-redux";
import Container from "./Container";
import DisplayCard from "./DisplayCard";

function Services() {
    const portfolioDetails = useSelector(store => store?.portfolioDetails?.portfolioDetails);
    const services = portfolioDetails?.user?.services;
    
    const carouselCircles = [];
    for(let i = 1; i <= services?.length/3; i++) {
        carouselCircles.push(<span key={Math.random()*10+1} className="block w-4 h-4 rounded-full bg-white"></span>);
    }

    return (
        <section>
            <div className="font-poppins -z-50 bg-gradient-to-r from-gray-900 to-stone-800 text-white rounded-3xl pt-20 pb-12">
                <Container>
                    <div className="ps-14 pe-5">
                        <h2 className="text-4xl font-bold">My <span className="text-orange-400">Services</span></h2>
                        <div className="flex gap-x-10 mt-14 overflow-hidden">
                            {
                                services?.map(service => <DisplayCard key={service._id} title={service?.name} imgSrc={service?.image?.url} />)
                            }
                        </div>
                        <div className="flex gap-x-3 justify-center mt-5">
                            {carouselCircles}
                        </div>
                    </div>
                </Container>
            </div>
        </section>
    )
}

export default Services;