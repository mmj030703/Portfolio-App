import { faQuoteRightAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSelector } from "react-redux";

function Testimonials() {
    const portfolioDetails = useSelector(store => store?.portfolioDetails?.portfolioDetails);
    const testimonials = portfolioDetails?.user?.testimonials;

    return (
        <section className='mt-20 bg-svg w-full h-[600px] block rounded-[2.5rem]'>
            <div className='w-full pt-20 flex flex-col items-center'>
                <h1 className='text-4xl font-bold text-center text-white max-w-96'>Testinomials That Speak to <span className='text-orange-400'>My Results</span></h1>
                <div className="scroll-smooth flex w-full gap-x-10 px-6 mt-20 overflow-hidden">
                    {
                        testimonials?.map(testimonial => testimonial?.enabled && (
                            <div key={testimonial?._id} className="ps-5 pe-3 pt-1 pb-5 bg-white/20 rounded-2xl">
                                <div className="w-[700px] flex justify-between items-center">
                                    <div className="flex gap-x-2 items-center">
                                        <img src={testimonial?.image?.url} className="w-10 rounded-full" alt="Testinomial Image" />
                                        <article>
                                            <p className="text-white text-lg font-medium">{testimonial?.name}</p>
                                            <p className="text-slate-400 font-medium text-sm">{testimonial?.position}</p>
                                        </article>
                                    </div>
                                    <FontAwesomeIcon icon={faQuoteRightAlt} className="text-white/20 text-[6.8rem] mr-5" />
                                </div>
                                <p className="mt-3 text-white font-light">{testimonial?.review}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default Testimonials;