import './styles/App.css';
import Header from './Components/Header/Header';
import Banner from './Components/Banner/Banner';
import About from './Components/About/About';
import Experience from './Components/Experiences/Experience';
import Footer from './Components/Footer/Footer';
import CursorAnim from './Components/CursorAnim';
import Portfolio from './Components/Portofolio/Projects';


function App() {
  return (
    <div className="App">
        <CursorAnim />
        <Header />
        <Banner react='React' django ='Django' python = 'Python'/>
        <About />
        <Experience />
        <Portfolio />
        <Footer  />
        
    </div>
  );
}

export default App;
