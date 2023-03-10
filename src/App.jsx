import './App.css';
import Education from './components/Education';
import Header from './components/Header';
import ParticlesBG from './components/ParticlesBG';
import Projects from './components/Projects';
import Skills from './components/Skills';

function App() {
  return (
    <div className='App'>
      <ParticlesBG />
      <Header />
      <Projects />
      <Skills />
      <Education />
    </div>
  );
}

export default App;
