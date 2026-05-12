import { memo } from 'react'
import { EnterpriseSection } from '../sections/EnterpriseSection'
import { HeroSection } from '../sections/HeroSection'
import { ImpactSection } from '../sections/ImpactSection'
import { IntelligenceSection } from '../sections/IntelligenceSection'
import { LayersSection } from '../sections/LayersSection'
import { SetupSection } from '../sections/SetupSection'
import { SignalLayerSection } from '../sections/SignalLayerSection'
import { SmartDbSection } from '../sections/SmartDbSection'
import { SovereigntySection } from '../sections/SovereigntySection'
import { VisibilitySection } from '../sections/VisibilitySection'

function HomePageComponent() {
  return (
    <>
      <HeroSection />
      <IntelligenceSection />
      <SignalLayerSection />
      <VisibilitySection />
      <SetupSection />
      <LayersSection />
      <SmartDbSection />
      {/* <OraSection /> */}
      <SovereigntySection />
      <EnterpriseSection />
      {/* <InfrastructureSection /> */}
      <ImpactSection />
    </>
  )
}

export const HomePage = memo(HomePageComponent)
