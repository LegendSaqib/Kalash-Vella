import { useState } from 'react'
import './App.css'
import AboutUs from './Pages/About/AboutUs'
import HeroSection from './Pages/HearoSection/HeroSection'
import MainGallery from './Pages/GalleryPage/MainGallery'
import MYG from './Pages/MeetYourGuide/MeetYGMain'
import RandP from './Pages/RandPricing/RandP'
import BookingMain from './Pages/Booking/BookingMain'
import ContectUsMain from './Pages/ContectUs/ContectUsMain'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navebar from './Component/Navebar'
import Footer from './Component/Footer'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Router>
      <Navebar/>
        <Routes>
         <Route path='/' element={<HeroSection/>}/> 
         <Route path='/About' element={<AboutUs/>} />
         <Route path='/Gallery' element={<MainGallery/>} /> 
         <Route path='/MeetYourGuide' element={<MYG/>} />
         <Route path='/RandPricing' element={ <RandP/>} />
         <Route path='/Booking' element={<BookingMain/>} />
         <Route path='/ContectUs' element={<ContectUsMain/>} />
        </Routes>
      <Footer/>
    </Router>
    </>
  )
}

export default App
