import { useState } from 'react'
import './App.css'
import { LoadingScreen } from './components/LoadingScreen'
import { Navbar } from './components/Navbar'
import { MobileMenu } from './components/MobileMenu'
import { Sidebar } from './components/Sidebar' // We will create this new component
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
      {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}

      {/* We added 'flex' here to align the sidebar and the main content side-by-side on desktop */}
      <div className={`min-h-screen flex transition-opacity duration-700 ${isLoaded ? "opacity-100" : "opacity-0"} bg-black text-gray-100`}>

        {/* Mobile Navigation - Hidden on screens md and larger */}
        <div className="md:hidden w-full z-50">
          <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
          <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        </div>

        {/* Desktop Sidebar - Fixed on the left, hidden on mobile */}
        <div className="hidden md:flex w-72 fixed h-screen border-r border-white/10 bg-[rgba(10,10,10,0.8)] backdrop-blur-lg z-40">
          <Sidebar />
        </div>

        {/* Main Content Area - Pushed to the right on desktop, standard on mobile */}
        <div className="w-full md:ml-72 flex-1 relative overflow-y-auto overflow-x-hidden pt-16 md:pt-0">
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
      </div>
    </>
  )
}

export default App