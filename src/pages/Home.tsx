import Navbar from "../components/Navbar"
import HeroCarousel from "../sections/HeroCarousel"
import VisionMission from "../sections/VisionMission"
import StrategicGoals from "../sections/StrategicGoals"
import StatsSection from "../sections/StatsSection"
import TestimonialsSection from "../sections/TestimonialsSection"
import JoinSection from "../sections/JoinSection"
import Footer from "../sections/Footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-canvas">
      <Navbar />
      <HeroCarousel />
      <VisionMission />
      <StrategicGoals />
      <StatsSection />
      <TestimonialsSection />
      <JoinSection />
      <Footer />
    </main>
  )
}
