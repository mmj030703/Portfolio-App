import { faQuoteLeft, faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useSelector } from 'react-redux';

function Hero() {
  const portfolioDetails = useSelector(store => store.portfolioDetails.portfolioDetails);
  const user = portfolioDetails?.user;

  const stars = [];
  for (let i = 0; i < 5; i++) {
    stars.push(<FontAwesomeIcon key={Math.random() * 10 + 1} icon={faStar} className='text-amber-600 text-[1.3rem]' />);
  }

  return (
    <section>
      <div className='mt-10 md-lg:mt-28 px-5 md-lg:px-0'>
        <div>
          <p className='font-semibold text-lg border-2 border-black w-fit mx-auto rounded-full py-[6px] px-5 text-center'><span>Hello!</span></p>
          <h1 className='text-[2.3rem] xs:text-[2.8rem] sm:text-[3.5rem] md-lg:text-[5rem] font-bold sm:font-semibold tracking-tight text-center'>I&apos;m <span className='text-orange-500'>{user?.about?.name}</span>,<span className='max-xs:text-[1.5rem] block -mt-3 xs:-mt-5 sm:-mt-8'>{user?.about?.title}</span></h1>
        </div>
        <div className='flex md:gap-x-14 md-lg:gap-x-28 justify-evenly'>
          <div className='hidden md:block mt-10 px-10'>
            <FontAwesomeIcon icon={faQuoteLeft} className='text-4xl' />
            <p className='max-w-[300px] font-semibold text-[17px] md-lg:text-[19.5px] mt-2'>{user?.about?.subTitle}</p>
          </div>
          <div className='relative md:me-14 md-lg:me-0 md-lg:-ms-[8rem] xs:-mt-7 sm:-mt-9 md:-mt-12'>
            <img className='-z-20 w-60 sm:w-96 rounded-t-full' src={user?.about?.avatar?.url} alt='Profile Image' />
          </div>
          <div className='hidden md:block mt-10 px-5'>
            {stars}
            <p className='w-max font-bold mt-2 text-3xl md-lg:text-4xl tracking-wide'>{user?.about?.exp_year} Years</p>
            <p className='w-max font-medium text-base md-lg:text-lg'>Experience</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero;