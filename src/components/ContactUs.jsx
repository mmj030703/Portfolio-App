import { useSelector } from 'react-redux';
import Container from './Container';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faLinkedinIn, faXTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';

function ContactUs() {
    const portfolioDetails = useSelector(store => store.portfolioDetails.portfolioDetails);
    const user = portfolioDetails?.user;
    const { address, phoneNumber } = user?.about || '';
    const { email } = user || '';

    return (
        <section className='mt-20'>
            <Container>
                <div className='ps-14 pe-5 pb-20 flex justify-between '>
                    <div>
                        <h1 className='text-4xl font-bold'>Don&apos;t hesitate <span className='block text-orange-400'>to talk to me</span></h1>
                        <div className='flex flex-col gap-y-10 mt-20'>
                            <div className='flex gap-x-2 items-center cursor-pointer group'>
                                <FontAwesomeIcon icon={faEnvelope} className='group-hover:bg-orange-500 bg-orange-400 text-white p-4 rounded-full text-xl' />
                                <article>
                                    <p className='font-semibold'>Email</p>
                                    <a href={`mailto:${user?.email}`}>
                                        <p className='text-sm font-medium'>{email}</p>
                                    </a>
                                </article>
                            </div>
                            <div className='flex gap-x-2 items-center cursor-pointer group'>
                                <FontAwesomeIcon icon={faPhone} className='group-hover:bg-orange-500 bg-orange-400 text-white p-4 rounded-full text-xl' />
                                <article>
                                    <p className='font-semibold'>Phone</p>
                                    <a href={`tel:${user?.about?.phoneNumber.slice(3)}`}>
                                        <p className='text-sm font-medium'>{phoneNumber}</p>
                                    </a>
                                </article>
                            </div>
                            <div className='flex gap-x-2 items-center'>
                                <FontAwesomeIcon icon={faLocationDot} className='bg-orange-400 text-white px-5 py-4 rounded-full text-xl' />
                                <article>
                                    <p className='font-semibold'>Address</p>
                                    <p className='text-sm font-medium'>{address}</p>
                                </article>
                            </div>
                            <div className='mt-3'>
                                <h1 className='font-semibold text-lg'>Social Links</h1>
                                <div className='flex gap-x-2 mt-2'>
                                    <FontAwesomeIcon className='cursor-pointer hover:bg-orange-500 bg-orange-400 text-white px-[10px] py-2 rounded-full text-xl' icon={faLinkedinIn} />
                                    <FontAwesomeIcon className='cursor-pointer hover:bg-orange-500 bg-orange-400 text-white px-2 py-2 rounded-full text-xl' icon={faXTwitter} />
                                    <FontAwesomeIcon className='cursor-pointer hover:bg-orange-500 bg-orange-400 text-white px-2 py-2 rounded-full text-xl' icon={faYoutube} />
                                    <FontAwesomeIcon className='cursor-pointer hover:bg-orange-500 bg-orange-400 text-white px-[11px] py-2 rounded-full text-xl' icon={faInstagram} />
                                    <FontAwesomeIcon className='cursor-pointer hover:bg-orange-500 bg-orange-400 text-white px-2 py-2 rounded-full text-xl' icon={faFacebook} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <iframe className='rounded-lg drop-shadow-2xl' src="http://maps.google.com/maps?q=34.052235,-118.243683&z=16&output=embed" height="540" width="600"></iframe>
                </div>
            </Container>
        </section>
    )
}

export default ContactUs;