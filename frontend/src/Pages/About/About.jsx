import { motion } from 'motion/react'
import './About.css'

function About() {
  const teamMembers = [
    {
      name: 'John Doe',
      role: 'CEO & Founder',
      image: 'https://images.unsplash.com/photo-1531891437562-4301cf35b7e4?q=80&w=1364&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      bio: 'Leading ConsultHub with over 15 years of industry experience.'
    },
    {
      name: 'Jane Smith',
      role: 'Head of Strategy',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=400&q=80',
      bio: 'Expert in business transformation and market analysis.'
    },
    {
      name: 'Mike Johnson',
      role: 'Operations Lead',
      image: 'https://images.unsplash.com/photo-1615109398623-88346a601842?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      bio: 'Specialist in process optimization and efficiency.'
    }
  ]

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
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  }

  return (
    <div className="about">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="container">
          <motion.div 
            className="about-hero-content"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1>About ConsultHub</h1>
            <p>Empowering businesses through strategic guidance and innovative solutions.</p>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="mission">
        <div className="container">
          <div className="mission-grid">
            <motion.div 
              className="mission-text"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2>Our Mission</h2>
              <div className="header-line left"></div>
              <p>At ConsultHub, our mission is to provide businesses with the expert guidance they need to navigate complex challenges and achieve sustainable growth. We believe in building long-term partnerships based on trust, integrity, and measurable results.</p>
              <p>Whether you're a startup looking for direction or an established enterprise seeking to optimize operations, our team of seasoned consultants is dedicated to your success.</p>
            </motion.div>
            <motion.div 
              className="mission-image"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80" alt="Team collaboration" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="team">
        <div className="container">
          <motion.div 
            className="section-header"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2>Our Leadership Team</h2>
            <div className="header-line"></div>
          </motion.div>

          <motion.div 
            className="team-grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {teamMembers.map((member, index) => (
              <motion.div key={index} className="team-card" variants={itemVariants}>
                <div className="team-image">
                  <img src={member.image} alt={member.name} />
                </div>
                <div className="team-info">
                  <h3>{member.name}</h3>
                  <p className="team-role">{member.role}</p>
                  <p className="team-bio">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="values">
        <div className="container">
          <motion.div 
            className="section-header"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2>Our Core Values</h2>
            <div className="header-line"></div>
          </motion.div>

          <div className="values-grid">
            <motion.div className="value-item" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
              <h3>Integrity</h3>
              <p>We believe in honesty and transparency in all our interactions.</p>
            </motion.div>
            <motion.div className="value-item" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
              <h3>Excellence</h3>
              <p>We strive for the highest quality in everything we do.</p>
            </motion.div>
            <motion.div className="value-item" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}>
              <h3>Partnership</h3>
              <p>Your success is our success. We work as an extension of your team.</p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About