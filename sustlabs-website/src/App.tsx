import './App.css'
import { Header } from './components/layout/Header'
import { HeroSection } from './components/sections/HeroSection'
import { IntelligenceSection } from './components/sections/IntelligenceSection'
import { SignalLayerSection } from './components/sections/SignalLayerSection'
import { VisibilitySection } from './components/sections/VisibilitySection'

function App() {
  return (
    <div className="app-shell">
      <Header />
      <HeroSection />
      <IntelligenceSection />
      <SignalLayerSection />
      <VisibilitySection />
    </div>
  )
}

export default App
