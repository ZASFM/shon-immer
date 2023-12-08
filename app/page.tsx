import Footer from './components/common/Footer';
import Header from './components/common/Header';
import Sidebar from './components/common/Sidebar';
import Categories from './components/home/Categories';
import HeroSection from './components/home/HeroSection';
import MenuSection from './components/home/MenuSection';
import Promos from './components/home/Promos';

export default function Home() {
  return (
    <div>
      <Header/>
      <Sidebar/>
      <HeroSection/>
      <Promos/>
      <Categories/>
      <MenuSection/>
      <Footer/>
    </div>
  )
}
