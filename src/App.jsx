import React from 'react'
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom'
import LoanHomePage from './pages/home/Home'
import ContactPage from './pages/contact/Page'
import About from './pages/about/Page'


export default function App() {
  return (
   <Router>
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
    </Routes>
   </Router>
  )
}
