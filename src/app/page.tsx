import Hero from "@/src/components/hero"
import ServicesPreview from "@/src/components/services-preview"
import ProjectsPreview from "@/src/components/projects-preview"
import Testimonials from "@/src/components/testimonials"
import Stats from "@/src/components/stats"
import CallToAction from "@/src/components/call-to-action"

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Stats />
      <ServicesPreview />
      <ProjectsPreview />
      <Testimonials />
      <CallToAction />
    </main>
  )
}
