import Link from "next/link"
import { Button } from "@/src/components/ui/button"
import { ArrowRight, Phone } from "lucide-react"

export default function CallToAction() {
  return (
    <section className="bg-primary py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Ready to Transform Your Space?</h2>
          <p className="mt-4 text-lg text-white/90">
            Let's discuss your project and bring your vision to life. Get a free consultation today.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/contact">
                Get Free Consultation
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
              <Phone className="mr-2 h-4 w-4" />
              Call +91 63760 4539
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
