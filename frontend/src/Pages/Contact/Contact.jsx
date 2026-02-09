import { useState } from 'react'
import { motion } from 'motion/react'
import axiosInstance from '../../lib/axios'
import './Contact.css'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState(null)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError(null)
    setSuccess(false)

    try {
      await axiosInstance.post('/contact', {
        name: formData.name,
        email: formData.email,
        message: formData.message
      })

      setSuccess(true)
      setFormData({
        name: '',
        email: '',
        message: ''
      })

      setTimeout(() => setSuccess(false), 5000)
    } catch (err) {
      setError(err.response?.data?.message || err.message || 'Failed to send message. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="contact-page">
      <section className="contact-hero">
        <div className="container">
          <motion.div
            className="contact-hero-content"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1>Get In Touch</h1>
            <p>We'd love to hear from you. Let's discuss how we can help your business thrive.</p>
          </motion.div>
        </div>
      </section>

      <div className="container">
        <div className="contact-grid">
          <motion.div
            className="contact-info"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2>Contact Details</h2>
            <p className="info-intro">Reach out to us through any of these channels or fill out the form.</p>

            <div className="info-list">
              <div className="info-item">
                <div className="info-text">
                  <h3>Phone</h3>
                  <a href="tel:+15551234567">+1 (555) 123-4567</a>
                </div>
              </div>

              <div className="info-item">
                <div className="info-text">
                  <h3>Email</h3>
                  <a href="mailto:info@consulthub.com">info@consulthub.com</a>
                </div>
              </div>

              <div className="info-item">
                <div className="info-text">
                  <h3>Our Office</h3>
                  <p>123 Business Plaza, Suite 456<br/>San Francisco, CA 94105</p>
                </div>
              </div>
            </div>

            <div className="social-connect">
              <h3>Connect Socially</h3>
              <div className="social-links">
                <a href="#linkedin" className="social-link">LinkedIn</a>
                <a href="#twitter" className="social-link">Twitter</a>
                <a href="#instagram" className="social-link">Instagram</a>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="contact-form-card"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2>Send a Message</h2>
            
            {success && (
              <motion.div
                className="alert success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
              >
                Your message was sent successfully!
              </motion.div>
            )}

            {error && (
              <motion.div
                className="alert error"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
              >
                {error}
              </motion.div>
            )}

            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    required
                    disabled={loading}
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  required
                  disabled={loading}
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">How can we help?</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your goals..."
                  rows="5"
                  required
                  disabled={loading}
                ></textarea>
              </div>

              <button
                type="submit"
                className="btn btn-primary full-width"
                disabled={loading}
              >
                {loading ? 'Sending Request...' : 'Send Message'}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Contact