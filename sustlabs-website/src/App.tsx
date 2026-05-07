import './App.css'
import { Header } from './components/layout/Header'
import { EnterpriseSection } from './components/sections/EnterpriseSection'
import { HeroSection } from './components/sections/HeroSection'
import { IntelligenceSection } from './components/sections/IntelligenceSection'
import { InfrastructureSection } from './components/sections/InfrastructureSection'
import { SignalLayerSection } from './components/sections/SignalLayerSection'
import { VisibilitySection } from './components/sections/VisibilitySection'
import { SetupSection } from './components/sections/SetupSection'
import { LayersSection } from './components/sections/LayersSection'
import { SmartDbSection } from './components/sections/SmartDbSection'
import { OraSection } from './components/sections/OraSection'
import { SovereigntySection } from './components/sections/SovereigntySection'
import { ImpactSection } from './components/sections/ImpactSection'

function App() {
  return (
    <div className="app-shell">
      <Header />
      <HeroSection />
      <IntelligenceSection />
      <SignalLayerSection />
      <VisibilitySection />
      <SetupSection />
      <LayersSection />
      <SmartDbSection />
      <OraSection />
      <EnterpriseSection />
      <InfrastructureSection />
      <SovereigntySection />
      <ImpactSection />
    </div>
  )
}

export default App