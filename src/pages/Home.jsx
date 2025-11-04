import About from '../components/About'
import Banner from '../components/Banner'
import BestDishes from '../components/BestDishes'
import Dishes from '../components/Dishes'
import Features from '../components/Features'
import Loader from '../components/Loader'
import MobileApp from '../components/MobileApp'
import Slider from '../components/Slider'
import { useObserver } from '../assets/hooks/Observer'

function Home() {
  useObserver();
  return (
    <main className='relative'>
      <Loader />
      <Banner />
      <Features />
      <About />
      <BestDishes p='Come & Experience Our Best of World Class Cousine'/>
      <Dishes />
      <MobileApp />
      <Slider />
    </main>
  )
}

export default Home