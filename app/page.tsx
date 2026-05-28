import Navbar from '@/components/landing/Navbar'
import Hero from '@/components/landing/Hero'
import VSSection from '@/components/landing/VSSection'
import ROICalculator from '@/components/landing/ROICalculator'
import ROIBreakdown from '@/components/landing/ROIBreakdown'
import MutualValue from '@/components/landing/MutualValue'
import HowItWorks from '@/components/landing/HowItWorks'
import Pricing from '@/components/landing/Pricing'
import Footer from '@/components/landing/Footer'

export default function LandingPage() {
  return (
    <main className="overflow-x-hidden" style={{ background: '#0A0A0F' }}>
      <Navbar />
      <Hero />
      <VSSection />
      <ROICalculator />
      <ROIBreakdown />
      <MutualValue />
      <HowItWorks />
      <Pricing />
      <Footer />
    </main>
  )
}
