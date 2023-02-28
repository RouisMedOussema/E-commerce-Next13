import 'bootstrap/dist/css/bootstrap.css'
import Navbar from './navbar'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
