import Header from './Header';
import Ash from './Ash';
import Hero from './Hero';
import About from './About';
import Work from './Work';
import Contact from './Contact';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
   AOS.init({once: true,});
   
   return   <div className='mb-[50px]'>
               <Header></Header>
               <Hero></Hero>
               <About></About>
               <Work></Work>
               <Contact></Contact>
               <Ash></Ash>
            </div>
}

export default App;