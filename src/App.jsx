import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Landing from "./assets/landing_1.jsx"
import MapsProvider from "./assets/parts/maps.jsx";
import FormWithLocation from "./assets/parts/form.jsx";

function App() {
  const [count, setCount] = useState(0)
  
  return (
    <Router>
      <div className='py-2'>
        <Routes>
          {/* Home route - shows only the landing page */}
          <Route path="/" element={<Landing />} />
          
          {/* Join our crib route - shows landing + form */}
          <Route 
            path="/joinourcrib" 
            element={
              <>
                <MapsProvider>
                  <FormWithLocation />
                </MapsProvider>
              </>
            } 
          />
        </Routes>
      </div>
    </Router>
  )
}

export default App