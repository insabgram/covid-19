import React from 'react'
import Header from '../components/header'
import Nav from '../components/nav'
import Footer from '../components/footer'

export default ({ children }) => 
  <>
    <Header>
      <Nav />
    </Header>
    
    <main className="mt-5">
      {children}
    </main>

    <Footer className="mt-auto" />
  </>