import { scrollToTop } from '@/util/helpers'
import { useEffect } from 'react'

export default function useScrollTop(dependency, smooth) {
  useEffect(() => {
    scrollToTop(smooth)

    return () => {
      scrollToTop(smooth)
    }
  }, [dependency])
}
