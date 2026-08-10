import { memo } from 'react'
import type { HomePageContent } from '@/lib/cms/home'
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

type HomePageProps = {
  content: HomePageContent
}

function HomePageComponent({ content }: HomePageProps) {
  return (
    <>
      <HeroSection section={content.heroSection} />
      <IntelligenceSection section={content.intelligenceSection} />
      <SignalLayerSection section={content.signalLayerSection} />
      <VisibilitySection section={content.safetySection} />
      <SetupSection section={content.setupSection} />
      <LayersSection section={content.layersSection} />
      <SmartDbSection section={content.smartDbSection} />
      <SovereigntySection section={content.sovereigntySection} />
      <EnterpriseSection section={content.enterpriseSection} />
      <ImpactSection section={content.impactSection} />
    </>
  )
}

export const HomePage = memo(HomePageComponent)
