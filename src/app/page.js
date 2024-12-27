import Categories from './components/Categories'
import DailyEssentials from './components/DailyEssentials'
import Electronics from './components/Electronics'
import Footer from './components/Footer'
import Header from './components/Header'
import Items from './components/Items'
import Slider from './components/Slider'
import Smartphones from './components/Smartphones'

export default function Home() {
  return (
    <div>
      <Header />
      <Items />
      <Slider />
      <Smartphones />
      <Categories />
      <Electronics />
      <DailyEssentials />
      <Footer />
    </div>
  )
}
