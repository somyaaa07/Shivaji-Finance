import React from 'react'
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom'
import LoanHomePage from './pages/home/Home'
import ContactPage from './pages/contact/Page'
import LoanServicePage from './pages/loanServices/Page'
export default function App() {
  return (
   <Router>
    <Routes>
      <Route path="/" element={
        <LoanHomePage/>
      }/>
      <Route path="/contact" element={
        <ContactPage/>
      }/>

      <Route path="/service" element={
        <LoanServicePage/>
      }/>
    </Routes>
   </Router>
  )
}
