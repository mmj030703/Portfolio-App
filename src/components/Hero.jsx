import { faArrowRight, faQuoteLeft, faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useSelector } from 'react-redux';

function Hero() {
  const portfolioDetails = useSelector(store => store.portfolioDetails.portfolioDetails);
  const user = portfolioDetails?.user;

  const stars = [];
  for (let i = 0; i < 5; i++) {
    stars.push(<FontAwesomeIcon key={Math.random()*10+1} icon={faStar} className='text-amber-600 text-[1.3rem]' />);
  }
  
  return (
    <section>
      <div className='mt-28'>
        <div>
          <p className='font-semibold text-lg border-2 border-black w-fit mx-auto rounded-full py-[6px] px-5 text-center'><span>Hello!</span></p>
          <h1 className='text-[5rem] font-semibold tracking-tight text-center'>I&apos;m <span className='text-orange-500'>{user?.about?.name}</span>,<span className='block -mt-8'>{user?.about?.title}</span></h1>
        </div>
        <div className='flex gap-x-28 justify-evenly'>
          <div className='mt-10'>
            <FontAwesomeIcon icon={faQuoteLeft} className='text-4xl' />
            <p className='max-w-[300px] font-semibold text-[19.5px] mt-2'>{user?.about?.subTitle}</p>
          </div>
          <div className='relative -ms-[8rem] -mt-12'>
            <img className='-z-20 w-96 rounded-t-full' src={user?.about?.avatar?.url} alt='Profile Image' />
            <div className='flex gap-x-5 items-center absolute bottom-7 left-[12%] text-lg text-white border-2 border-white w-fit mx-auto rounded-full py-2 px-2 text-center'>
              <button className='w-max bg-orange-500 rounded-full py-3 px-7 text-xl font-medium'>Portfolio <FontAwesomeIcon icon={faArrowRight} className='-rotate-45 ms-1' /></button>
              <span className='w-max font-medium pe-1'>Hire Me</span>
            </div>
          </div>
          <div className='mt-10'>
            {stars}
            <p className='font-bold mt-2 text-4xl tracking-wide'>{user?.about?.exp_year} Years</p>
            <p className='font-medium text-lg'>Experience</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero;