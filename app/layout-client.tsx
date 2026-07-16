'use client'

import { usePathname } from 'next/navigation'
import Header from "@/share-component/header/header"
import Footer from "@/share-component/footer/footer"

export function LayoutClient({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const hiddenNavbar = pathname === "/login"

  return (
    <>
      {!hiddenNavbar && <Header />}
      {children}
      {!hiddenNavbar && <Footer />}
    </>
  )
}
