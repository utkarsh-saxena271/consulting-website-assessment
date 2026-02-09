import { Link } from 'react-router-dom'
import './Footer.css'

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link to="/" className="footer-logo">
              <span>Consult</span>Hub
            </Link>
            <p>Empowering businesses through strategic guidance and innovative solutions since 2012.</p>
            <div className="footer-social">
              <a href="#linkedin" aria-label="LinkedIn">LN</a>
              <a href="#twitter" aria-label="Twitter">TW</a>
              <a href="#instagram" aria-label="Instagram">IG</a>
            </div>
          </div>

          <div className="footer-links">
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          <div className="footer-services">
            <h4>Expertise</h4>
            <ul>
              <li><Link to="/services">Business Strategy</Link></li>
              <li><Link to="/services">Operations</Link></li>
              <li><Link to="/services">Digital Transformation</Link></li>
              <li><Link to="/services">Financial Planning</Link></li>
            </ul>
          </div>

          <div className="footer-newsletter">
            <h4>newsletter</h4>
            <p>Get the latest insights delivered to your inbox.</p>
            <div className="newsletter-form">
              <input type="email" placeholder="Email Address" />
              <button className="btn btn-primary">Join</button>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-legal">
            <Link to="/privacy">Privacy Policy</Link>
            <Link to="/terms">Terms of Service</Link>
          </div>
          <p className="copyright">&copy; {currentYear} ConsultHub. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer