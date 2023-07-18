import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import NavBar from "./components/NavBar"
import Home from "./pages/Home"
import Contact from "./pages/contact"
import Works from "./pages/works"
import './App.css'



function App() {


  return (
    <>
      <Router>
        <div className="navBar__position">
          <NavBar></NavBar>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/works" element={<Works/>}/>
            <Route path="/contact" element={<Contact/>}/>
          </Routes>
        </div>
      </Router>
    </>
  )
}

export default App
