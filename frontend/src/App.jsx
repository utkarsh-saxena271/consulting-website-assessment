import Navbar from './Components/NavBar/NavBar'
import Footer from './Components/Footer/Footer'
import ScrollToTop from './Components/ScrollToTop'
import './App.css'
import MainRoutes from './Routes/MainRoutes'

function App() {
  return (
    <div className="app">
      <ScrollToTop />
      <Navbar />
      <main className="main-content">
        <MainRoutes/>
      </main>
      <Footer />
    </div>
  )
}

export default App