'use client'

import { createContext, useContext, useState } from 'react'

const SliderContext = createContext(null)

export default function SliderProvider ({ children }) {
  const [swiper, setSwiper] = useState(null)

  return (
    <SliderContext.Provider value={{ setSwiper, swiper }}>
      {children}
    </SliderContext.Provider>
  )
}

export function useSlider () {
  return useContext(SliderContext)
}
