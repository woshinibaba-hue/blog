import React, { useEffect } from 'react'
import Typed, { TypedOptions } from 'typed.js'

export function useText(el: React.RefObject<Element>, options: TypedOptions) {
  if (!options.strings?.length) throw Error('strings can not be empty!')

  const defaultOptions: TypedOptions = {
    typeSpeed: 200,
    backSpeed: 100,
    cursorChar: '_',
    loop: true
  }

  useEffect(() => {
    let typed: Typed
    if (el.current) {
      typed = new Typed(el.current, { ...defaultOptions, ...options })
    }

    return () => typed && typed.destroy()
  }, [])
}
