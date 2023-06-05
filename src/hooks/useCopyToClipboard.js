import { useState, useEffect } from 'react'

export const useCopyToClipboard = () => {
  const [copiedText, setCopiedText] = useState(null)

  const copy = async (text) => {
    if (!navigator?.clipboard) {
      console.warn('Clipboard not supported')
      return false
    }

    // Try to save to clipboard then save it in the state if worked
    try {
      // eslint-disable-next-line compat/compat
      await navigator.clipboard.writeText(text)
      setCopiedText(text)
      setTimeout(() => {
        setCopiedText(null)
      }, 2000)
      return true
    } catch (error) {
      console.warn('Copy failed', error)
      setCopiedText(null)
      return false
    }
  }

  useEffect(() => {}, [copiedText])

  return [copiedText, copy]
}
