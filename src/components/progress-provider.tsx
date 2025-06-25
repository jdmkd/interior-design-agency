"use client"

import NProgress from "nprogress"
import "nprogress/nprogress.css"
import { useEffect, useRef, useState } from "react"
import { usePathname } from "next/navigation"
import "./progress-bar.css"

NProgress.configure({ showSpinner: false, trickleSpeed: 200 })

function GlobalLoader() {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-white/60 pointer-events-none transition-opacity animate-fade-in">
      <div className="h-12 w-12 border-4 border-primary border-t-transparent rounded-full animate-spin" />
    </div>
  )
}

export default function ProgressProvider() {
  const pathname = usePathname()
  const [loading, setLoading] = useState(false)
  const prevPath = useRef(pathname)

  useEffect(() => {
    if (prevPath.current !== pathname) {
      NProgress.start()
      setLoading(true)
      setTimeout(() => {
        NProgress.done()
        setLoading(false)
      }, 400)
      prevPath.current = pathname
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname])

  return loading ? <GlobalLoader /> : null
} 