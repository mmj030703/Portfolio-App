import AboutMe from './AboutMe';
import ContactUs from './ContactUs';
import Hero from './Hero';
import Projects from './Projects';
import Services from './Services';
import Skills from './Skills';
import SkillsSlider from './SkillsSlider';
import Testimonials from './Testimonials';
import Timeline from './Timeline';

function Body() {
  return (
    <div className='font-poppins'>
      <Hero />
      <Services />
      <AboutMe />
      <Skills />
      <Projects />
      <Timeline />
      <SkillsSlider />
      <Testimonials />
      <ContactUs />
    </div>
  )
}

export default Body;