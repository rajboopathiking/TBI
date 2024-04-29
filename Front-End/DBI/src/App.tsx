import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Content from "./components/Content";
import Contact from "./components/Contact";
import About from "./components/About";
import Apporach from "./components/Apporach";
import Parameter from "../src/components/Parameter"
import "../src/App.css"
import Features from "../src/components/Features"

export default function App() {
  return (
    <div className='overflow-x-hidden bg-black text-white'>
      < Navbar />
      < Hero />
      < Apporach />
      < Parameter />
      < Features />
      < Content />
      < Contact />
      < About />
    </div>
    
  )
}
