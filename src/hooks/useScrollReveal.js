import { useEffect, useRef } from 'react'

export function useScrollReveal({ threshold = 0.1, rootMargin = '0px' } = {}) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('revealed')
          observer.unobserve(el)
        }
      },
      { threshold, rootMargin }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold, rootMargin])

  return ref
}

export function useScrollRevealGroup({ threshold = 0.1, rootMargin = '0px', staggerDelay = 100 } = {}) {
  const ref = useRef(null)

  useEffect(() => {
    const container = ref.current
    if (!container) return

    const children = container.querySelectorAll('.reveal-item')
    if (!children.length) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          children.forEach((child, i) => {
            child.style.transitionDelay = `${i * staggerDelay}ms`
            child.classList.add('revealed')
          })
          observer.unobserve(container)
        }
      },
      { threshold, rootMargin }
    )

    observer.observe(container)
    return () => observer.disconnect()
  }, [threshold, rootMargin, staggerDelay])

  return ref
}
