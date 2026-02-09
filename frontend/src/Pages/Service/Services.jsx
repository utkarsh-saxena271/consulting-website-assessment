import { useEffect, useState } from 'react'
import { motion } from 'motion/react'
import ServiceCard from '../../Components/ServiceCard/ServiceCard'
import axiosInstance from '../../lib/axios'
import './Services.css'

function Services() {
  const [services, setServices] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchServices = async () => {
      try {
        setLoading(true)
        const response = await axiosInstance.get('/service')
        setServices(response.data.data.services || [])
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
        staggerChildren: 0.1
      }
    }
  }

  return (
    <div className="services-page">
      <section className="services-hero">
        <div className="container">
          <motion.div 
            className="services-hero-content"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1>Our Comprehensive Services</h1>
            <p>Tailored strategic solutions designed to accelerate your business growth and efficiency.</p>
          </motion.div>
        </div>
      </section>

      <div className="container">
        {loading ? (
          <div className="loading-state">
            <div className="loader"></div>
            <p>Gathering expert solutions...</p>
          </div>
        ) : error ? (
          <div className="error-state">
            <p>✗ {error}</p>
            <button onClick={() => window.location.reload()} className="btn btn-primary">Try Again</button>
          </div>
        ) : (
          <motion.div 
            className="services-listing-grid"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {services.map((service, index) => (
              <ServiceCard
                key={service._id || index}
                id={service._id}
                title={service.title}
                shortDescription={service.shortDescription}
              />
            ))}
          </motion.div>
        )}
      </div>

      <section className="services-footer-cta">
        <div className="container">
          <motion.div 
            className="cta-card secondary"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2>Don't See What You're Looking For?</h2>
            <p>We provide custom consulting solutions tailored to your unique business needs.</p>
            <a href="/contact" className="btn btn-primary">Discuss Custom Solution</a>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Services
