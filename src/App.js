import logo from './logo.svg';
import './App.css';
import Hero from './components/Hero/Hero';
import Program from './programs/Program';
import Reason from './components/Reason/Reason';

function App() {
  return (
  <div className='App'>
    <Hero />
    <Program />
    <Reason />
    </div>
  );
}

export default App;
