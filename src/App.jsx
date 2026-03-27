import React from 'react'
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom'
import LoanHomePage from './pages/home/Home'
import ContactPage from './pages/contact/Page'

import LoanServicePage from './pages/loanServices/Page'

import About from './pages/about/Page'
import Navbar from './common/Navbar'
import Footer from './common/Footer'
import ApplyLoanPage from './pages/applyLoanPage/Page'



export default function App() {
  return (
   <Router>

   <Navbar/>
    <Routes>
      <Route path="/" element={
        <LoanHomePage/>
      }/>

        <Route path="/about" element={
        <About/>
      }/>
      <Route path="/contact" element={
        <ContactPage/>
      }/>

      <Route path="/service" element={
        <LoanServicePage/>
      }/>
      
      <Route path="/applyloan" element={
        <ApplyLoanPage/>
      }/>

     

    </Routes>
     <Footer/>
   </Router>
   
  )
}
