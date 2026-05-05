import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Intro from './components/Intro';
import Attivita from './components/Attivita';
import SfidePratiche from './components/SfidePratiche';
import Competenze from './components/Competenze';
import Galleria from './components/Galleria';
import Riflessioni from './components/Riflessioni';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-elevated">
      <Navbar />
      <main>
        <Hero />
        <Intro />
        <Attivita />
        <SfidePratiche />
        <Competenze />
        <Galleria />
        <Riflessioni />
      </main>
      <Footer />
    </div>
  );
}

export default App;
