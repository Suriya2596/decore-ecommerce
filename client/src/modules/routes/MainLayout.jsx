// import React from 'react'
import { Outlet } from 'react-router-dom'
import { NavbarWithMegaMenu } from '../components/common/Header'
import { Footer } from '../components/common/Footer'

const MainLayout = () => {
  return (
    <div>
      <div>
        <NavbarWithMegaMenu />
      </div>
      <main className="">
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default MainLayout
