import { Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home/Home'
import Services from '../Pages/Service/Services'
import ServiceDetail from '../Pages/ServiceDetails/ServiceDetail'
import Contact from '../Pages/Contact/Contact'
import About from '../Pages/About/About'


const MainRoutes = () => {
  return (
<Routes>
    <Route path='/' element={ <Home/> }/>
    <Route path='/services' element={ <Services/> }/>
    <Route path='/services/:id' element={ <ServiceDetail/> }/>
    <Route path='/contact' element={ <Contact/> }/>
    <Route path='/about' element={ <About/> }/>
</Routes>
  )
}

export default MainRoutes