import { Link } from 'react-router-dom'
import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import './NavBar.css'

function NavBar() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const menuVariants = {
    closed: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
        ease: 'easeInOut'
      }
    },
    open: {
      opacity: 1,
      height: 'auto',
      transition: {
        duration: 0.3,
        ease: 'easeInOut'
      }
    }
  }

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <span>Consult</span>Hub
        </Link>
        
        <div className={`hamburger ${isOpen ? 'active' : ''}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <ul className="nav-menu-desktop">
          <li className="nav-item">
            <Link to="/" className="nav-link">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/services" className="nav-link">Services</Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-link">About</Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-link btn-nav-cta">Contact</Link>
          </li>
        </ul>

        <AnimatePresence>
          {isOpen && (
            <motion.ul 
              className="nav-menu-mobile"
              initial="closed"
              animate="open"
              exit="closed"
              variants={menuVariants}
            >
              <li className="nav-item">
                <Link to="/" className="nav-link" onClick={() => setIsOpen(false)}>Home</Link>
              </li>
              <li className="nav-item">
                <Link to="/services" className="nav-link" onClick={() => setIsOpen(false)}>Services</Link>
              </li>
              <li className="nav-item">
                <Link to="/about" className="nav-link" onClick={() => setIsOpen(false)}>About</Link>
              </li>
              <li className="nav-item">
                <Link to="/contact" className="nav-link nav-link-cta" onClick={() => setIsOpen(false)}>Contact</Link>
              </li>
            </motion.ul>
          )}
        </AnimatePresence>
      </div>
    </nav>
  )
}

export default NavBar