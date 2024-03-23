import './styles/App.css';
import Header from './Components/Header';
import Banner from './Components/Banner';
import About from './Components/About';
import Experience from './Components/Experience';
import Footer from './Components/Footer';
import CursorAnim from './Components/CursorAnim';


function App() {
  return (
    <div className="App">
        <CursorAnim />
        <Header />
        <Banner react='React' django ='Django' python = 'Python'/>
        <About />
        <Experience />
        <Footer  />
    </div>
  );
}

export default App;
