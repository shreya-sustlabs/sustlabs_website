import { useEffect } from 'react'
import { Navigate, Route, Routes, useLocation, useParams } from 'react-router-dom'
import './App.css'
import { Header } from './components/layout/Header'
import { HomePage } from './components/page/HomePage'
import { MonitoringPage } from './components/page/MonitoringPage'
import { OhmOsPage } from './components/page/OhmOsPage'
import { OraAddOnPage } from './components/page/OraAddOnPage'
import { SmartDbPage } from './components/page/SmartDbPage'
import { SolutionsPage } from './components/page/SolutionsPage'
import { MONITORING_PRODUCTS } from './utils/constants'

const DEFAULT_MONITORING_PATH = MONITORING_PRODUCTS[0].path

function ScrollToTop() {
  const { hash, pathname } = useLocation()

  useEffect(() => {
    if (hash) {
      window.requestAnimationFrame(() => {
        document.getElementById(hash.slice(1))?.scrollIntoView({ behavior: 'smooth' })
      })
      return
    }

    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [hash, pathname])

  return null
}

function MonitoringRoute() {
  const { slug } = useParams()
  const monitoringProduct = MONITORING_PRODUCTS.find((product) => product.path.endsWith(`/${slug}`))

  if (!monitoringProduct) {
    return <Navigate replace to={DEFAULT_MONITORING_PATH} />
  }

  return <MonitoringPage data={monitoringProduct} />
}

function App() {
  return (
    <div className="app-shell">
      <ScrollToTop />
      <Header />
      <Routes>
        <Route element={<HomePage />} path="/" />
        <Route element={<OhmOsPage />} path="/ohm-os" />
        <Route element={<SmartDbPage />} path="/smart-db" />
        <Route element={<OraAddOnPage />} path="/add-ons/ora" />
        <Route element={<SolutionsPage />} path="/solutions" />
        <Route element={<MonitoringRoute />} path="/monitoring/:slug" />
        <Route element={<Navigate replace to="/" />} path="*" />
      </Routes>
    </div>
  )
}

export default App
