import React from 'react'
import Page1 from './components/pages/page1/Page1/Page1'
import Page2 from './components/pages/Page2/page2/Page2'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Contact from '../src/components/pages/Contact/Contact/Contact';

export default function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Page1/>}></Route>
          <Route path='/prediction' element={<Page2/>}></Route>
          <Route path='/Contact' element={<Contact/>}></Route>
        </Routes>
      </Router>
      
      
    </div>
  )
}
