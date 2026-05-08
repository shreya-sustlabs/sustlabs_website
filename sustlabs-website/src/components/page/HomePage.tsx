import { lazy, memo, Suspense, useEffect, useState } from 'react'
import { HeroSection } from '../sections/HeroSection'

const ImpactSection = lazy(() =>
  import('../sections/ImpactSection').then((module) => ({ default: module.ImpactSection })),
)
const EnterpriseSection = lazy(() =>
  import('../sections/EnterpriseSection').then((module) => ({ default: module.EnterpriseSection })),
)
const InfrastructureSection = lazy(() =>
  import('../sections/InfrastructureSection').then((module) => ({ default: module.InfrastructureSection })),
)
const IntelligenceSection = lazy(() =>
  import('../sections/IntelligenceSection').then((module) => ({ default: module.IntelligenceSection })),
)
const LayersSection = lazy(() =>
  import('../sections/LayersSection').then((module) => ({ default: module.LayersSection })),
)
const OraSection = lazy(() => import('../sections/OraSection').then((module) => ({ default: module.OraSection })))
const SetupSection = lazy(() =>
  import('../sections/SetupSection').then((module) => ({ default: module.SetupSection })),
)
const SignalLayerSection = lazy(() =>
  import('../sections/SignalLayerSection').then((module) => ({ default: module.SignalLayerSection })),
)
const SmartDbSection = lazy(() =>
  import('../sections/SmartDbSection').then((module) => ({ default: module.SmartDbSection })),
)
const SovereigntySection = lazy(() =>
  import('../sections/SovereigntySection').then((module) => ({ default: module.SovereigntySection })),
)
const VisibilitySection = lazy(() =>
  import('../sections/VisibilitySection').then((module) => ({ default: module.VisibilitySection })),
)

function HomePageComponent() {
  const [showDeferredSections, setShowDeferredSections] = useState(false)

  useEffect(() => {
    const loadSections = () => setShowDeferredSections(true)

    if ('requestIdleCallback' in window) {
      const idleId = window.requestIdleCallback(loadSections, { timeout: 1500 })
      return () => window.cancelIdleCallback(idleId)
    }

    const timeoutId = globalThis.setTimeout(loadSections, 600)
    return () => globalThis.clearTimeout(timeoutId)
  }, [])

  return (
    <>
      <HeroSection />
      {showDeferredSections ? (
        <Suspense fallback={null}>
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
        </Suspense>
      ) : null}
    </>
  )
}

export const HomePage = memo(HomePageComponent)
