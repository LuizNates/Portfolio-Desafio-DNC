import Navbar from '../src/componentes/section/Navbar'
import Presentation from '../src/componentes/section/Presentation'
import Projects from '../src/componentes/section/Projects'
import Timeline from '../src/componentes/section/Timeline'
import Footer from '../src/componentes/section/Footer'
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Presentation/>
      <Projects/>
      <Timeline/>
      <Footer/>
    </div>
  );
}

export default App;
