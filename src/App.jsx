import { useState } from 'react'
import './App.css'
import { LoadingScreen } from './components/LoadingScreen'
import { Navbar } from './components/Navbar'
import { MobileMenu } from './components/MobileMenu'
import { Home } from './components/section/Home'
import { About } from './components/section/About'
import { Projects } from './components/section/Projects'
import { Contact } from './components/section/Contact'
import { Footer } from './components/Footer'
import { Route, Routes } from 'react-router-dom'
import "./index.css"
import { Blogs } from './components/Blogs/Blogs'

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}{" "}
      <div className={`min-h-screen transistion-opacity duration-700 ${isLoaded ? "opacity-100" : "opacity-9"} bg-black text-gray-100`}>
        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Home />
                <About />
                <Projects />
                <Contact />

              </>
            }
          />
          <Route path="/blogs" element={<Blogs />} />
        </Routes>
        <Footer />
      </div>

    </>
  )
}

export default App
