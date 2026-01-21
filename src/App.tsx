import { useState } from 'react'
import { Link } from 'react-router-dom' // Import Link for navigation
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="white-container">
      <header>
        <nav className="navbar">
          <div className="logo-container">
            <img src="/tshepang.png" alt="Tshepang Logo" className="logo" /> {/* Logo remains at the top left */}
          </div>
          <ul className="nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#products">Products</a></li>
            <li><a href="#careers">Careers</a></li>
            <li><Link to="/login">Login</Link></li>
          </ul>
        </nav>
      </header>
      <main>
        <section className="about-section" id="home">
          <h2>About Us</h2>
          <p>
            At Tshepang Tech, we specialize in cutting-edge technology solutions to help businesses thrive in the digital age. 
            Our team is dedicated to delivering innovative and reliable services tailored to your needs.
          </p>
        </section>
        <section className="services-section" id="products">
          <h2>Our Products</h2>
          <div className="card-container">
            <div className="card">
              <h3>Project Management Tool</h3>
              <p>Streamline your workflows and manage projects efficiently with our intuitive tool.</p>
            </div>
            <div className="card">
              <h3>Cloud Storage Platform</h3>
              <p>Securely store, access, and share your data with our scalable cloud storage solutions.</p>
            </div>
            <div className="card">
              <h3>AI Chatbot</h3>
              <p>Enhance customer support with our intelligent and conversational AI chatbot.</p>
            </div>
            <div className="card">
              <h3>Cybersecurity Suite</h3>
              <p>Protect your business from cyber threats with our comprehensive security tools.</p>
            </div>
          </div>
        </section>
        <section className="careers-section" id="careers">
          <h2>Careers</h2>
          <p>Join our team and help shape the future of technology. Here are some of our current openings:</p>
          <ul className="job-list">
            <li>
              <h3>Software Engineer</h3>
              <p>Location: Remote | Full-Time</p>
              <p>Responsibilities: Develop and maintain scalable software solutions.</p>
            </li>
            <li>
              <h3>Cloud Architect</h3>
              <p>Location: New York, USA | Full-Time</p>
              <p>Responsibilities: Design and implement cloud infrastructure for clients.</p>
            </li>
            <li>
              <h3>Data Scientist</h3>
              <p>Location: London, UK | Full-Time</p>
              <p>Responsibilities: Analyze data and build predictive models.</p>
            </li>
          </ul>
        </section>
        <section className="contact-section">
          <h2>Contact Us</h2>
          <p>
            Ready to take your business to the next level? Get in touch with us today!
          </p>
          <button onClick={() => alert('Thank you for reaching out!')}>
            Contact Us
          </button>
        </section>
      </main>
    </div>
  )
}

export default App
