import { Link } from 'react-router-dom'
import { motion } from 'motion/react'
import './ServiceCard.css'

function ServiceCard({ id, title, shortDescription }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      whileHover={{ y: -8 }}
    >
      <Link to={`/services/${id}`} className="service-card">
        <div className="service-card-accent"></div>
        <div className="service-card-content">
          <h3>{title}</h3>
          <p>{shortDescription?.length > 120 ? `${shortDescription.substring(0, 120)}...` : shortDescription}</p>
          <span className="service-card-link">
            Explore Details 
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4.16666 10H15.8333" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M10.8333 5L15.8333 10L10.8333 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </span>
        </div>
      </Link>
    </motion.div>
  )
}

export default ServiceCard

