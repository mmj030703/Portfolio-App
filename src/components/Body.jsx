import AboutMe from './AboutMe';
import Hero from './Hero';
import Services from './Services';

function Body() {
  return (
    <div className='h-[10000px] font-poppins'>
        <Hero />
        <Services />
        <AboutMe />
    </div>
  )
}

export default Body;