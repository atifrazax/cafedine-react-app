
import AboutUs from '../components/AboutUs'
import BannerAll from '../components/BannerAll'
import Chefs from '../components/Chefs'
import BestDishes from '../components/BestDishes'
import Slider from '../components/Slider'
import Testimonials from '../components/Testimonials'
import Services from '../components/Services'
import { useObserver } from '../assets/hooks/Observer'
import Loader from '../components/Loader'

function About() {
  useObserver();
  return (
    <main>
        <Loader />
        <BannerAll title="About Us"/>
        <AboutUs />
        <Chefs />
        <Testimonials />
        <BestDishes img="/recipe-5.webp" p='Are you looking for a quite place?'/>
        <Services />
        <Slider />
    </main>
  )
}

export default About