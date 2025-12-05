import Loader from '../components/Loader'
import { lazy, Suspense } from 'react'
import Banner from '../components/Banner'
import Features from '../components/Features'
import About from '../components/About'
import BestDishes from '../components/BestDishes'
import Dishes from '../components/Dishes'
const MobileApp = lazy(() => import('../components/MobileApp'));
const Slider = lazy(() => import('../components/Slider'));
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
      <Suspense fallback={<></>}>
      <MobileApp />
      <Slider />
      </Suspense>
    </main>
  )
}

export default Home