import { lazy, Suspense, useEffect } from 'react'
import { Navigate, Route, Routes, useLocation } from 'react-router-dom'
import './App.css'
import { Header } from './components/layout/Header'
import { HomePage } from './components/page/HomePage'

const MonitoringRoute = lazy(() =>
  import('./components/page/MonitoringRoute').then((module) => ({ default: module.MonitoringRoute })),
)
const OhmOsPage = lazy(() => import('./components/page/OhmOsPage').then((module) => ({ default: module.OhmOsPage })))
const OraAddOnPage = lazy(() =>
  import('./components/page/OraAddOnPage').then((module) => ({ default: module.OraAddOnPage })),
)
const SmartDbPage = lazy(() =>
  import('./components/page/SmartDbPage').then((module) => ({ default: module.SmartDbPage })),
)
const SolutionsPage = lazy(() =>
  import('./components/page/SolutionsPage').then((module) => ({ default: module.SolutionsPage })),
)

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

function App() {
  return (
    <div className="app-shell">
      <ScrollToTop />
      <Header />
      <Suspense fallback={null}>
        <Routes>
          <Route element={<HomePage />} path="/" />
          <Route element={<OhmOsPage />} path="/ohm-os" />
          <Route element={<SmartDbPage />} path="/smart-db" />
          <Route element={<OraAddOnPage />} path="/add-ons/ora" />
          <Route element={<SolutionsPage />} path="/solutions" />
          <Route element={<MonitoringRoute />} path="/monitoring/:slug" />
          <Route element={<Navigate replace to="/" />} path="*" />
        </Routes>
      </Suspense>
    </div>
  )
}

export default App
