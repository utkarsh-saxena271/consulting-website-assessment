import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { motion } from 'motion/react'
import ServiceCard from '../../Components/ServiceCard/ServiceCard'
import axiosInstance from '../../lib/axios'
import './ServiceDetail.css'

function ServiceDetail() {
  const { id } = useParams()
  const [service, setService] = useState(null)
  const [otherServices, setOtherServices] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true)
        // Fetch current service
        const serviceRes = await axiosInstance.get(`/service/${id}`)
        setService(serviceRes.data.data.service)

        // Fetch all services for the 'more services' section
        const allRes = await axiosInstance.get('/service')
        const allServices = allRes.data.data.services || []
        // Filter out the current service and take up to 3
        const filtered = allServices
          .filter(s => s._id !== id)
          .sort(() => 0.5 - Math.random()) // Randomize a bit
          .slice(0, 3)
        setOtherServices(filtered)
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    if (id) {
      fetchData()
    }
  }, [id])

  if (loading) {
    return (
      <div className="service-detail-loading">
        <div className="loader"></div>
        <p>Expertly retrieving service details...</p>
      </div>
    )
  }

  if (error || !service) {
    return (
      <div className="container">
        <div className="service-detail-error">
          <h2>Oops! Service Not Found</h2>
          <p>{error || 'The requested service could not be located.'}</p>
          <Link to="/services" className="btn btn-primary">Back to All Services</Link>
        </div>
      </div>
    )
  }

  return (
    <div className="service-detail-page">
      <section className="service-detail-hero">
        <div className="container">
          <motion.div 
            className="breadcrumb"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <Link to="/services">Services</Link> / <span>{service.title}</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {service.title}
          </motion.h1>
          <motion.p
            className="service-tagline"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {service.shortDescription || 'Strategic solutions for your business'}.
          </motion.p>
        </div>
      </section>

      <div className="container">
        <div className="service-detail-content">
          <motion.div 
            className="main-info-full"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2>Strategic Overview</h2>
            <div className="header-line left"></div>
            <p className="full-description">{service.detailedDescription}</p>

            <div className="service-detail-cta">
              <Link to="/contact" className="btn btn-primary btn-large">
                Discuss This Service
              </Link>
            </div>
          </motion.div>
        </div>

        {otherServices.length > 0 && (
          <section className="more-services">
            <div className="section-header">
              <h2>More Services We Offer</h2>
              <div className="header-line"></div>
            </div>
            <div className="services-grid">
              {otherServices.map((s, index) => (
                <ServiceCard
                  key={s._id || index}
                  id={s._id}
                  title={s.title}
                  shortDescription={s.shortDescription}
                />
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  )
}

export default ServiceDetail
