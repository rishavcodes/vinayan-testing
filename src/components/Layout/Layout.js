import React from 'react'
import Navbar from './Navbar'
import NavbarTest from './NavbarTest'
import Footer from './Footer/Footer'
import ContactForm from '../Contact/ContactForm'

const Layout = ({children}) => {
  return (
    <div>
        {/* <Navbar /> */}
        <NavbarTest />
        <div>
            {children}
        </div>
        <ContactForm />
        <Footer />
    </div>
  )
}

export default Layout