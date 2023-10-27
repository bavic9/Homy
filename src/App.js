
import './App.css';
import Header from './Components/Header';
import Hero from './Components/Hero';
import Companies from './Components/Companies';
import Residencies from './Components/Residencies';
import Values from './Components/Values';
import Contact from './Components/Contact';
import Cta from './Components/Cta';
import Footer from './Components/Footer';

function App() {
  return (
      <div>
        <Header/>
        <Hero/>
        <Companies/>
        <Residencies/>
        <Values/>
        <Contact/>
        <Cta/>
        <Footer/>
      </div>
  );
}

export default App;
