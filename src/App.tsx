import Navbar from "./components/Navbar"
import Apporach from "./components/Apporach"
import Hero from "./components/Hero"
import Contact from "./components/Contact"
import Content from "./components/Content"
import About from "./components/About"
import Features from "./components/Features"
import Parameter from "../src/components/Parameter"

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
