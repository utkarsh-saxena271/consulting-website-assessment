import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'motion/react'
import ServiceCard from '../../Components/ServiceCard/ServiceCard'
import axiosInstance from '../../lib/axios'
import './Home.css'

function Home() {
  const [services, setServices] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchServices = async () => {
      try {
        setLoading(true)
        const response = await axiosInstance.get('/service')
        setServices((response.data.data.services || []).slice(0, 3))
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    fetchServices()
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-overlay"></div>
        <div className="container">
          <motion.div 
            className="hero-content"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              Transform Your Business <span className="text-accent">Today</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              Strategic consulting that delivers real results. Partner with ConsultHub for expert guidance and proven solutions.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              <Link to="/contact" className="btn btn-primary btn-large">
                Get Started Now
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="value-props">
        <div className="container">
          <motion.div 
            className="section-header"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2>Why Choose ConsultHub?</h2>
            <div className="header-line"></div>
          </motion.div>

          <motion.div 
            className="value-grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div className="value-card" variants={itemVariants}>
              <h3>Proven Results</h3>
              <p>10+ years of delivering measurable success for businesses across industries.</p>
            </motion.div>
            <motion.div className="value-card" variants={itemVariants}>
              <h3>Expert Team</h3>
              <p>Industry-leading consultants with deep expertise and real-world experience.</p>
            </motion.div>
            <motion.div className="value-card" variants={itemVariants}>
              <h3>Quick Implementation</h3>
              <p>Fast-tracked solutions that fit your timeline and budget.</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="services-overview">
        <div className="container">
          <motion.div 
            className="section-header"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2>Our Key Services</h2>
            <p className="section-subtitle">Comprehensive solutions tailored to your business needs</p>
          </motion.div>
          
          {loading ? (
            <div className="loading-container">
              <div className="loader"></div>
              <p>Loading premium services...</p>
            </div>
          ) : error ? (
            <div className="error-message">Failed to load services. Please try again later.</div>
          ) : (
            <div className="services-grid">
              {services.map((service, index) => (
                <ServiceCard
                  key={service._id || index}
                  id={service._id}
                  title={service.title}
                  shortDescription={service.shortDescription}
                />
              ))}
            </div>
          )}

          <motion.div 
            className="services-cta"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <Link to="/services" className="btn-outline">
              View All Services
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="final-cta">
        <div className="container">
          <motion.div 
            className="cta-card"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2>Ready to Elevate Your Business?</h2>
            <p>Let's discuss how ConsultHub can help you achieve your goals</p>
            <Link to="/contact" className="btn btn-primary white">
              Contact Us Today
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Home