import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import NavBar from "./components/NavBar"
import Home from "./pages/Home"
import Contact from "./pages/Contact"
import Works from "./pages/Works"
import './App.css'
import { useState, useEffect } from "react"
import images from "./data/images"
import './assets/styles/slide.css'
import './assets/styles/gallery.css'


function App() {
  const [data, setData] = useState([])
  useEffect(() => {
    setData(images)
  }, [0])


  return (
    <>
      <Router>
        <div className="navBar__position">
          <NavBar></NavBar>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/works" element={<Works data={data}/>}/>
            <Route path="/contact" element={<Contact/>}/>
          </Routes>
        </div>
      </Router>
    </>
  )
}

export default App
