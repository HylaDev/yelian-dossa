import './styles/App.css';
import Header from './Components/Header';
import Banner from './Components/Banner';
import About from './Components/About';
import Experience from './Components/Experience';


function App() {
  return (
    <div className="App">
        <Header />
        <Banner />
        <About />
        <Experience />
    </div>
  );
}

export default App;
