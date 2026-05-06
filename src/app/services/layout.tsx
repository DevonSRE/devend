"use client"

import Footer from "../home/footer/page"

interface LayoutProps {
  children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div>
      {children}
      <Footer showForm={true} />
    </div>
  )
}

export default Layout
