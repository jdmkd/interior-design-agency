import Link from "next/link"
import { Button } from "@/src/components/ui/button"
import { ArrowRight, Phone } from "lucide-react"

export default function CallToAction() {
  return (
    <section className="bg-primary py-12">
      <div className="mx-auto max-w-7xl px-4 lg:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-4">Ready to Transform Your Space?</h2>
          <p className="mt-0 text-lg text-white/90 mb-6">Let's discuss your project and bring your vision to life. Get a free consultation today.</p>
          <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              variant="secondary"
              asChild
              className="bg-white text-primary font-semibold shadow-md h-14 px-8 text-base border-2 border-white hover:bg-primary hover:text-white focus:bg-primary focus:text-white sm:w-auto w-full flex items-center justify-center transition-colors duration-200"
            >
              <Link href="/contact">
                <ArrowRight className="mr-2 h-5 w-5" />
                Get Free Consultation
              </Link>
            </Button>
            <Button
              size="lg"
              className="bg-white text-primary font-semibold shadow-md h-14 px-8 text-base border-2 border-white hover:bg-primary hover:text-white focus:bg-primary focus:text-white sm:w-auto w-full flex items-center justify-center transition-colors duration-200"
              asChild
            >
              <a href="tel:+91637604539">
                <Phone className="mr-2 h-5 w-5" />
                Call +91 63760 4539
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
