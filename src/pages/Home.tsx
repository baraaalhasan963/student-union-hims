import Navbar from "../components/Navbar"
import SocialFab from "../components/SocialFab"
import HeroCarousel from "../sections/HeroCarousel"
import AboutUnion from "../sections/VisionMission"
import Departments from "../sections/Departments"
import Events from "../sections/Events"
import StatsSection from "../sections/StatsSection"
import TestimonialsSection from "../sections/TestimonialsSection"
import Services from "../sections/Services"
import Feedback from "../sections/Feedback"
import Volunteer from "../sections/Volunteer"
import Footer from "../sections/Footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-canvas">
      <Navbar />
      <HeroCarousel />
      <AboutUnion />
      <Departments />
      <Events />
      <StatsSection />
      <TestimonialsSection />
      <Services />
      <Feedback />
      <Volunteer />
      <Footer />
      <SocialFab />
    </main>
  )
}
