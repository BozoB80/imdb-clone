import './globals.css'
import { Header } from '@/components/Header'
import Providers from './Providers'
import Navbar from '@/components/Navbar'
import SearchBox from '@/components/SearchBox'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body>
        <Providers>
          <Header />
          <Navbar />
          <SearchBox />
          {children}
        </Providers>
      </body>
    </html>
  )
}
