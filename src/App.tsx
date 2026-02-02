import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Privacy from './pages/Privacy'
import DeleteAccount from './pages/DeleteAccount'
import './App.css'
import { Analytics } from "@vercel/analytics/react"

function App() {
  return (
    <>
      <Analytics />
      <BrowserRouter>
        <nav className="p-4 border-b border-white/10 mb-4 flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <img src="/monitrac-logo.png" alt="Monitrac Logo" className="h-8 w-auto mr-2" />
            <span className="font-bold text-xl">Monitrac</span>
          </Link>
          <div className="flex gap-4">
            <Link to="/" className="hover:text-primary">Home</Link>
            <Link to="/about" className="hover:text-primary">About</Link>
            <Link to="/privacy" className="hover:text-primary">Privacy</Link>
            <Link to="/delete-account" className="hover:text-primary">Delete Account</Link>
          </div>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/delete-account" element={<DeleteAccount />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
