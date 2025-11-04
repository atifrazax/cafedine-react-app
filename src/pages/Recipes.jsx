
import BannerAll from '../components/BannerAll'
import Dishes from '../components/Dishes'
import MainDishes from '../components/MainDishes'
import { useObserver } from '../assets/hooks/Observer';
function Recipes() {
  useObserver();
     const data = [
            {img: '/recipe-2.webp', title: 'Vitello Tonato', price: 25, category: 'starter', para: 'Adipisicing elit. Ipsa nulla officia sint.'},
            {img: '/recipe-3.webp', title: 'Crema di Pomodoro', price: 39, category: 'launch', para: 'Lorem Maiores fugit illo deserunt!'},
            {img: '/recipe-2.webp', title: 'Affordable Price', price: 20, category: 'dinner', para: 'Amet, consectetur adipisicing elit. Ipsa nulla officia.'},
            {img: '/recipe-1.webp', title: 'Seasonal Soup', price: 15, category: 'starter', para: 'Dlor sit amet, consectetur adipisicing elit.'},
            {img: '/recipe-2.webp', title: 'Oatmeal Cookie', price: 15, category: 'launch', para: 'Ipsa nulla officia sint.'},
            {img: '/recipe-4.webp', title: 'Pizza Pane', price: 27, category: 'dinner', para: 'Consectetur adipisicing elit. Ipsa nulla officia sint.'},
        ]
  return (
    <>
    <BannerAll title='Food Menu'/>
    <Dishes />
    <MainDishes data={data}/>
    </>
  )
}

export default Recipes