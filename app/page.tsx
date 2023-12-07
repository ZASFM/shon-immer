import Header from './components/common/Header';
import Sidebar from './components/common/Sidebar';
import HeroSection from './components/home/HeroSection';
import Promos from './components/home/Promos';

export default function Home() {
  return (
    <div>
      <Header/>
      <Sidebar/>
      <HeroSection/>
      <Promos/>
    </div>
  )
}
