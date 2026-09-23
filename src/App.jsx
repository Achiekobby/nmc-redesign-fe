import Footer from '@/components/layout/Footer'
import Navbar from '@/components/layout/Navbar'
import AppRoutes from './routes/routes'

function App() {
  return (
    <>
      <Navbar />
      <main id="main">
        <AppRoutes />
      </main>
      <Footer />
    </>
  )
}

export default App
