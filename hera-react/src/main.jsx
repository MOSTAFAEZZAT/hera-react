import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './pages/App.jsx'
import Testimonials from './pages/Testimonials.jsx'
import Stats from './pages/Stats.jsx'
import TrustedBy from './pages/TrustedBy.jsx'
import Services from './pages/Features.jsx'
import Footer from './pages/Footer.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Service />
    <TrustedBy />
    <Stats />
    <Testimonials />
    <Footer />
  </React.StrictMode>,
)
