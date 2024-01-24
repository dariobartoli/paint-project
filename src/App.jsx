import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import NavBar from "./components/NavBar"
import Home from "./pages/Home"
import Contact from "./pages/Contact"
import Works from "./pages/Works"
import './App.css'
import './assets/styles/slide.css'
import Work from "./pages/Work"


function App() {
  return (
    <div>
      <Router>
          <NavBar></NavBar>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/works" element={<Works/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/works/:id" element={<Work/>}/>
          </Routes>
      </Router>
    </div>
  )
}

export default App
