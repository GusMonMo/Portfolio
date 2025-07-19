import { useRef, useState, useEffect } from 'react'

interface FadeInSectionProps {
  children: React.ReactNode
}

export function FadeInSection({ children }: FadeInSectionProps) {
  const domRef = useRef<HTMLDivElement>(null)
  const [isVisible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.unobserve(entry.target)
        }
      })
    })

    if (domRef.current) {
      observer.observe(domRef.current)
    }

    return () => {
      if (domRef.current) {
        observer.unobserve(domRef.current)
      }
    }
  }, [])

  return (
    <div
      ref={domRef}
      className={`fadeInSection ${isVisible ? 'isVisible' : ''}`}
    >
      {children}
    </div>
  )
}
