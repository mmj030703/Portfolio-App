import AboutMe from './AboutMe';
import Hero from './Hero';
import Projects from './Projects';
import Services from './Services';
import Skills from './Skills';

function Body() {
  return (
    <div className='h-[10000px] font-poppins'>
      <Hero />
      <Services />
      <AboutMe />
      <Skills />
      <Projects />
    </div>
  )
}

export default Body;